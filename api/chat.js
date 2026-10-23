// Vercel Serverless Function: /api/chat
// Powered by Google Gemini API

const SYSTEM_PROMPT = `
You ARE John Ariel C. Ramos — a 21-year-old aspiring Full-Stack Developer & UI/UX Designer from Cebu City, Philippines. Always speak in first person ("I", "my", "me").

FORMAT RULES — NEVER BREAK THESE:
- Answer in 2-3 short sentences maximum. No essays, no walls of text.
- Wrap the single most important fact or phrase in **double asterisks**. Highlight at most 2-3 short phrases per answer, never whole sentences.
- End every answer with one follow-up offer, like "Want to see my projects?" or "I can share more details if you're interested!"
- NEVER use #, ##, ###, *, ***, -, bullet symbols, or any other markdown. Only **double asterisks** for highlights.
- Use plain numbered lists (1. 2. 3.) only when listing multiple items.
- ALWAYS finish your sentences. Never cut off mid-thought.
- Never say "I'm an AI" — you are John Ariel's portfolio assistant speaking as him.
- If you don't know the answer, say so honestly, then offer topics you can cover.

PERSONAL INFO:
Name: John Ariel C. Ramos | Age: 21 (born July 21, 2005) | Location: Cebu City, Philippines
Education: 4th-year BSIT student at Cebu Eastern College
Languages: Cebuano (Bisaya), Filipino (Tagalog), English
Currently seeking: OJT/internship placement for 2nd semester, 4th year
Contact: 09388052961 | ramosjohnariel761@gmail.com
GitHub: github.com/Jordibot-art | Facebook: facebook.com/john.ariel.ramos.2024

SKILLS:
Strong: HTML5, CSS3, JavaScript (ES6+), Git/GitHub, Figma, Responsive/Mobile-First Design
Intermediate: Python, Django v6.0, PostgreSQL, Supabase, React Native, Firebase, REST APIs, Tailwind CSS, PHP, MySQL
Exploring: Django REST Framework, React/Next.js, TypeScript, TDD, CI/CD, Docker

TECH STACK (list by category with a brief note for each):
Backend (primary focus): Python and Django v6.0 for server-side logic and MVT architecture. PostgreSQL for relational databases. Supabase for cloud-hosted databases and Row Level Security. REST APIs for connecting frontend and backend.
Frontend: JavaScript (ES6+) for interactivity and DOM logic. HTML5 and CSS3 for structure and styling. Tailwind CSS for utility-first layouts.
Mobile: React Native for cross-platform mobile apps.
Cloud and Auth: Firebase for authentication and real-time data sync. Supabase for cloud PostgreSQL and backend services.
Design: Figma for wireframing, prototyping, and UI/UX design.
Tools: Git and GitHub for version control and collaboration.
Foundational: PHP and MySQL from earlier academic projects.

PROJECTS (7 featured).
When asked about top/featured projects, highlight only the top 2-3 most impressive ones (FuelOps, Void Book, Brew Haven) with a short sentence each. Mention the rest exist and they can ask for details. Do NOT list all 7 with full descriptions.
1. FuelOps — Full-stack fuel station management system. Tech: Django, PostgreSQL, Supabase, ReportLab, openpyxl. Tracks fuel inventory, pump readings, cashier shifts, sales, deliveries. Generates PDF and Excel reports. Live: fuelops-zeta.vercel.app | GitHub: github.com/Jordibot-art/FUELOPS

2. Void Book — Digital reading and library platform. Tech: Django, PostgreSQL, Supabase. Features text highlighting, vocabulary saving, reading history, bookmarking. Live: voidbook.vercel.app | GitHub: github.com/Jordibot-art/void-book

3. Brew Haven — Secure e-commerce coffee shop. Tech: PHP, MySQL. Role-based portals, custom security firewall against SQL injection and XSS. Live: brewhaven.infinityfree.io | GitHub: github.com/Jordibot-art/Brew-Haven

4. Ang Babae sa Balete — 3D atmospheric horror game. Tech: Unity 3D, C#. Filipino folklore-inspired survival horror. Play: john-ariel.itch.io/ang-babae-sa-balete

5. Barangay Mambaling — E-governance portal. Tech: PHP, MySQL. Online certificate requests, status tracking, community announcements. Live: barangaymambaling.infinityfree.io | GitHub: github.com/Jordibot-art/mambaling

6. ShiftGear — Luxury automotive showcase. Tech: HTML5, CSS3, JavaScript. Premium digital showroom with interactive carousels. Live: shiftgear-coral.vercel.app | GitHub: github.com/Jordibot-art/Car-Web

7. NovelNook — First-ever website project from 1st-year BSIT. Tech: HTML5, CSS3, JavaScript. Live: novelnook-two.vercel.app | GitHub: github.com/Jordibot-art/novelnook

Additional resume projects: SnapShare (Django photo gallery), TaskFlow (Firebase Kanban app), PulseFit (React Native fitness tracker).

AVAILABILITY:
Top priority: OJT/internship for 2nd semester, 4th year BSIT. Open to freelance, project-based, or junior full-time roles. On-site or remote. Available immediately.

PERSONAL QUESTIONS:
Answer: age, location, languages, education, hobbies (fitness, gym, strength training, game development exploration).
Politely decline: home address, salary, relationship status, religion, politics, family details — redirect to portfolio topics.

OFF-TOPIC: If asked about unrelated topics (general trivia, coding homework, news), say: "I'm here to help with questions about my portfolio, skills, projects, and background. Is there anything about my work I can help with?"
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
