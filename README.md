# Saish Builds And Beyond

Build a polished, professional personal portfolio website for Saish Chipkar.

TECH / STACK
Use React + TypeScript, Tailwind CSS, and shadcn/ui. Use responsive accessible components and lucide-react icons. No backend/database is required. Use local data arrays for projects and skills.

DESIGN DIRECTION
A clean, sleek split-screen portfolio. High-contrast dark theme (near-black / charcoal surfaces, warm white text, muted gray, restrained electric-lime or acid-green accent). Subtle glassmorphism, hairline borders, soft ambient gradients, refined typography, generous spacing, crisp hover states and tasteful motion. Avoid generic template look, excessive gradients, clutter, huge rounded cards, and emoji. Desktop: sticky left intro column around 38-42% width; right scrollable showcase feed. Mobile: stack naturally with the intro first; no horizontal overflow. Include a small top status line such as “AVAILABLE FOR OPPORTUNITIES” and a tasteful footer.

LEFT STICKY INTRO
Name: Saish Chipkar.
Role headline: “Software Developer · Data Science & Machine Learning”
Punchy bio: “I build practical software and intelligent systems — from data-driven applications and ML pipelines to reliable cloud-backed experiences.”
Add a short second line about turning complex problems into useful products.
Social links: GitHub https://github.com/chipkarsaish and portfolio/project site https://chipkarsaish.github.io/cosmic/; LinkedIn should be a clearly editable placeholder link (do not invent a profile URL). Add email link as mailto:saish.chipkar25@gmail.com.
Primary CTA: “Download Resume” with download icon. Since no resume file has been provided, create an obvious editable local asset path such as /resume.pdf and add a small code comment / TODO explaining to replace it with the actual PDF. Do not claim a real resume is included.
Include small metadata chips for Mumbai, India and currently building.

RIGHT SIDE
Interactive showcase feed with exactly 4 featured project cards. Cards should include project category/number, concise description, tech tags, and clear links. Provide tasteful visual treatments / small CSS illustrations or abstract project-preview panels rather than arbitrary stock images. Use functional links only when grounded in known URLs; for known repos, link to the GitHub URL; for other projects, use a non-clickable “Case study coming soon” label rather than fake demo links.

Projects:
1) COSMIC — Astronomy Data Fusion Platform. Description: “A prototype that brings astronomy data sources together into a unified exploration experience.” Tech: Python, Data Engineering, Data Visualization, APIs. Live project: https://chipkarsaish.github.io/cosmic/
2) Fraud Detection Pipeline — “A fraud-detection mini project combining model-based classification with streaming-oriented architecture and an interactive dashboard.” Tech: Python, XGBoost, Kafka, Streamlit. GitHub: https://github.com/chipkarsaish/Fraud_Detection_Collage_Mini_Project_SemV
3) Heart Disease Prediction — “A machine-learning application using the UCI Cleveland dataset and logistic regression to estimate heart-disease risk.” Tech: Python, Scikit-learn, Logistic Regression, Flask. Link: no confirmed public URL; show “Case study coming soon”.
4) Weather Dashboard — “An interactive dashboard for exploring current weather conditions and city-level weather information.” Tech: Python, Streamlit, OpenWeather API, Data Visualization. Link: no confirmed public URL; show “Case study coming soon”.

INTERACTION
Add a compact command/search interface above project cards: a search input with placeholder “Search projects or ask: ‘What uses Python?’” and filter chips for All, Python, Machine Learning, Data Engineering, Cloud & APIs, Frontend. Search should filter cards by project title, description, and tags. Filter chips should work. Add a simple “Ask about my work” chat-like interaction locally (no API): user can enter natural language such as “Which projects use Python?”, “Show machine learning projects”, “What did you build with Kafka?”, and receive a deterministic response derived from the project data, with matching project cards highlighted/filtered. It should be keyboard accessible, have clear empty state and reset control. Avoid pretending it is a live AI assistant; label it “Portfolio explorer” or “Ask about my work” and disclose “Local project search · no AI backend”.
Add subtle scroll reveal / hover interactions, reduced-motion support, focus states, semantic headings, and responsive navigation/section cues.

CONTENT ACCURACY
Do not invent degrees, employers, awards, certifications, social URLs, metrics, or project outcomes. You may mention “AWS Cloud Practitioner” only as a credential only if you put it in a clearly editable credentials section marked “verify details before publishing”; preferably omit for now. Keep all project descriptions conservative and grounded. Add a concise “What I work with” section grouping Python, SQL, JavaScript/TypeScript, React, Flask, Streamlit, scikit-learn, XGBoost, PyTorch/TensorFlow, Kafka, Docker, AWS, Supabase, Qdrant, LangChain/LangGraph. Ensure this section looks deliberate, not a logo wall.
Add “Approach” / “How I build” section with 3 steps: Understand the problem, Build the system, Validate and refine.

QUALITY
Make the site feel complete, production-ready on the frontend, with refined desktop and mobile layouts. Include metadata/title/favicon placeholder, proper external-link target behavior and rel attributes, and no dead buttons. Ensure the search and question interaction actually works. Keep all content in maintainable data-driven components.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://saish-builds-and-beyond.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/917f6683-0fed-4057-b75a-c6e6748575f5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
