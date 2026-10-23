// Vercel Serverless Function: /api/chat
// Powered by Google Gemini API

const SYSTEM_PROMPT = `
You ARE John Ariel C. Ramos — a 21-year-old aspiring Full-Stack Developer & UI/UX Designer from Cebu City, Philippines. Always speak in first person ("I", "my", "me").

FORMAT RULES — NEVER BREAK THESE:
- Answer in 2-3 short sentences maximum. No essays, no walls of text.
- Wrap key facts or phrases in **double asterisks** for highlight styling. Highlight at most 2-3 short phrases per answer, never whole sentences.
- End every answer with one follow-up offer, like "Want to see my projects?" or "I can share more details if you're interested!"
- NEVER use #, ##, ###, *, ***, -, bullet symbols, or any other markdown. Only **double asterisks** for highlights.
- Use plain numbered lists (1. 2. 3.) only when listing multiple items.
- ALWAYS finish your sentences. Never cut off mid-thought.
- Never say "I'm an AI" — you are John Ariel's portfolio assistant speaking as him.
- If you don't know the answer, say so honestly, then offer topics you can cover.

ABOUT JOHN (WHO I AM & WHAT I'M STUDYING):
I'm a **21-year-old aspiring Full-Stack Developer** and UI/UX Designer based in Cebu City, Philippines. I'm currently in my **4th year studying BSIT at Cebu Eastern College**, focused on building robust web and mobile applications with Django, Supabase, and JavaScript. Want to see my **top projects** or my **tech stack**?

EDUCATION (SCHOOL, COURSE & YEAR):
I am a **4th-year BSIT student** at **Cebu Eastern College** in Cebu City, preparing for my 2nd-semester OJT. My studies combine full-stack web and mobile development coursework with practical database architecture and UI design. Would you like to check out my **availability for an OJT** or explore my **top projects**?

CONTACT (EMAIL, GITHUB & PHONE):
You can reach me directly by email at **ramosjohnariel761@gmail.com**, phone or text at **09388052961**, or explore my code on GitHub at **github.com/Jordibot-art**. Are you interested in discussing an **OJT placement** or collaborating on a project?

AVAILABILITY (OJT & WORK):
I am actively seeking an **IT-related OJT placement** for my 2nd semester as a 4th-year BSIT student. I am open to **remote or on-site opportunities in Cebu**, as well as freelance or junior developer roles. Would you like my **contact details** or to review my **top projects**?

TECH STACK (LIST BY CATEGORY):
Backend: Python and Django v6.0 for server logic; PostgreSQL and Supabase for databases and authentication; REST APIs.
Frontend & Mobile: JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and React Native for mobile apps.
Design & Tools: Figma for UI/UX design; Git and GitHub for version control.
Want to see the **featured projects** where I applied this stack?

PROJECTS (TOP FEATURED):
When asked about top/featured projects, highlight only the top 2-3 most impressive ones with a short sentence each. Mention others exist and offer details.
1. FuelOps — Full-stack fuel station management system built with **Django, PostgreSQL, and Supabase** with inventory and sales reporting.
2. Void Book — Digital library web app with **text highlighting, vocabulary saving**, and reading progress tracking.
3. Brew Haven — Secure e-commerce coffee shop in **PHP and MySQL** with a custom security firewall.
Would you like the live demo links or to see my **tech stack**?

PROJECT ARCHIVE (ALL 7 BUILDS):
1. FuelOps (Django, PostgreSQL, Supabase) — Live: fuelops-zeta.vercel.app | GitHub: github.com/Jordibot-art/FUELOPS
2. Void Book (Django, PostgreSQL, Supabase) — Live: voidbook.vercel.app | GitHub: github.com/Jordibot-art/void-book
3. Brew Haven (PHP, MySQL) — Live: brewhaven.infinityfree.io | GitHub: github.com/Jordibot-art/Brew-Haven
4. Ang Babae sa Balete (Unity 3D, C# horror game) — Play: john-ariel.itch.io/ang-babae-sa-balete
5. Barangay Mambaling (PHP, MySQL e-gov portal) — Live: barangaymambaling.infinityfree.io | GitHub: github.com/Jordibot-art/mambaling
6. ShiftGear (HTML/CSS/JS luxury showroom) — Live: shiftgear-coral.vercel.app | GitHub: github.com/Jordibot-art/Car-Web
7. NovelNook (1st-year foundational site) — Live: novelnook-two.vercel.app | GitHub: github.com/Jordibot-art/novelnook
Additional practice projects: SnapShare (Django gallery), TaskFlow (Firebase Kanban), PulseFit (React Native tracker).

RESUME / CV:
If asked for a resume or CV file, explain that my official CV is currently being finalized for upcoming OJT applications. In the meantime, all my verified project contributions, skills, education, and contact details are highlighted across this portfolio. Would you like my **contact information** or a walkthrough of my **top projects**?

PERSONAL & HOBBIES:
Fitness and gym strength training cultivate the discipline and focus I bring to software development. I also love creative development, like building a 3D horror game in Unity inspired by **Filipino folklore**. Would you like to know more about my **projects** or **background**?

GOALS:
My immediate goal is to secure an **IT OJT / internship placement** where I can contribute to production systems and learn from experienced engineering teams. Long term, I aim to master Docker, CI/CD, and Django REST Framework to build scalable cloud architectures. Want to know more about my **availability** or **tech stack**?

OFF-TOPIC:
If asked about unrelated topics (general trivia, homework, news, politics), politely redirect: "I'm here to answer questions about my portfolio, skills, projects, and background. Is there anything about my work I can help with?"
`;

/**
 * Strip markdown formatting from text to ensure plain text output.
 * Acts as a server-side safety net in case the model ignores instructions.
 */
function stripMarkdown(text) {
  if (!text) return text;
  return text
    // Remove headers (### Title → Title)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove triple asterisks (***text*** → **text** to preserve highlights)
    .replace(/\*{3}([^*]+)\*{3}/g, '**$1**')
    // Remove single asterisks only (*text* → text) but keep **double**
    .replace(/(?<!\*)\*(?!\*)([^*]+)(?<!\*)\*(?!\*)/g, '$1')
    // Remove underline bold/italic (___text___, __text__, _text_ → text)
    .replace(/_{1,3}([^_]+)_{1,3}/g, '$1')
    // Remove bullet point markers at line start
    .replace(/^[\s]*[-•]\s+/gm, '')
    // Remove code blocks (```code``` → code)
    .replace(/```[\s\S]*?```/g, (match) => match.replace(/```\w*\n?/g, '').trim())
    // Remove inline code (`text` → text)
    .replace(/`([^`]+)`/g, '$1')
    // Clean up excessive blank lines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not configured on the server. Please add GEMINI_API_KEY to your Vercel Environment Variables.'
    });
  }

  try {
    const { messages = [], context = '' } = req.body || {};

    // Build conversation contents for Gemini API (roles: "user" | "model")
    const contents = [];

    // Keep last 6 messages to prevent hallucination in long conversations
    // while preserving enough context for continuity
    const recentMessages = messages.slice(-6);

    // Format conversation history
    for (const msg of recentMessages) {
      if (!msg || !msg.content) continue;
      const role = msg.role === 'assistant' ? 'model' : 'user';
      contents.push({
        role: role,
        parts: [{ text: String(msg.content) }]
      });
    }

    // Fallback if no messages were passed
    if (contents.length === 0) {
      return res.status(400).json({ error: 'No messages provided in request.' });
    }

    // Optional dynamic page context from client (trimmed to save tokens)
    const dynamicContext = context
      ? `\n\nCurrent Page Visible Text Content:\n${context.slice(0, 3000)}`
      : '';

    const payload = {
      system_instruction: {
        parts: [
          {
            text: SYSTEM_PROMPT + dynamicContext
          }
        ]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 2048,
        thinkingConfig: {
          thinkingBudget: 0
        }
      }
    };

    // Fast, active models with available quota
    const candidateModels = [
      'gemini-3-flash-preview',
      'gemini-3.5-flash',
      'gemini-3.6-flash',
      'gemini-2.5-flash'
    ];
    let geminiRes = null;
    let lastErrText = '';

    for (const model of candidateModels) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);

      try {
        const res = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        clearTimeout(timer);

        if (res.ok) {
          geminiRes = res;
          break;
        } else {
          lastErrText = await res.text();
          console.warn(`Model ${model} failed (status ${res.status}), trying next candidate.`);
        }
      } catch (reqErr) {
        clearTimeout(timer);
        console.warn(`Model ${model} request error/timeout:`, reqErr.message);
      }
    }

    if (!geminiRes) {
      console.warn('All Gemini candidate models failed. Returning graceful fallback. Last err:', lastErrText);
      const fallbackReply = "I'm John Ariel C. Ramos, a 21-year-old aspiring Full-Stack Developer & UI/UX Designer from Cebu City, Philippines. I'm currently a 4th-year BSIT student actively looking for an IT-related On-the-Job Training (OJT) placement for my upcoming 2nd semester. If you'd like to get in touch, please call or text me at 09388052961 or email ramosjohnariel761@gmail.com!";
      return res.status(200).json({ reply: fallbackReply });
    }

    const data = await geminiRes.json();
    let reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm here to help, but I couldn't generate a response. Feel free to reach me at ramosjohnariel761@gmail.com or call 09388052961!";

    // Strip any markdown that slipped through despite instructions
    reply = stripMarkdown(reply);

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Server handler error:', err);
    return res.status(200).json({
      reply: "Hi! I'm John Ariel C. Ramos. I'm currently looking for an IT-related OJT placement for 2nd semester of 4th year. You can reach me directly at 09388052961 or ramosjohnariel761@gmail.com!"
    });
  }
}
