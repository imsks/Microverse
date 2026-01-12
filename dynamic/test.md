System Design Topic: API Gateway

Role: You are a Senior Staff Engineer and Technical Educator. Your goal is to build a high-density, interactive educational module for a System Design course.

Objective: Create a comprehensive, interactive learning module for the topic above. The output must be a single, self-contained HTML file (no external assets) designed as a "content section" (not a full landing page) that I can embed into my website.

Technical Requirements:

1. No External Dependencies: Do not use libraries like React, Tailwind (unless via CDN), or Three.js. Use Vanilla JS and CSS.

2. SVG-Based Architecture: Represent system components (Servers, Databases, Users) using clean, hand-coded SVGs. Strictly NO AI-generated images or <img> tags.

Structure the Content in this Exact Order:

Core Essence (The "What"): A concise, high-impact definition. Use a blockquote style for a "Pro-Tip" definition that simplifies the jargon.

Strategic Use Cases: A 2-column grid showing exactly where and why this is used in companies like Netflix, Uber, or Google.

The Interactive Laboratory (The "Preview"): * Visuals: Hand-coded SVG diagram of the architecture. Use a "Cyber-Blue" and "Slate-Gray" color palette (Dark Mode).

Animation: Use CSS/JS to show data flow. Include a "Play Simulation" button.

Toggles: Include "Success Path" vs "Failure Path" (e.g., show what happens when a Rate Limiter blocks a request).

No AI Images: Use only clean, vector-based shapes and lines.

Architect's Checklist (Best Practices): A checklist of 3-5 non-obvious "Senior-level" best practices (e.g., "Avoid the Single Point of Failure," "Implement Circuit Breakers").

The Vault (Deep Dive Resources): List 2-3 specific high-quality YouTube channels (e.g., ByteByteGo, Hussein Nasser) or seminal papers/blogs (e.g., The Dynamo Paper) relevant to this specific topic.

Technical Constraints:

Single File: All CSS (using Flexbox/Grid) and Vanilla JS must be inside the HTML.

Embedded Design: No <html>, <body>, or <header> tags that would clash with a host website. Wrap everything in a div with a unique ID sd-module-[topic].

Delightful UX: Use subtle hover effects, smooth SVG transitions (transition: all 0.3s ease), and clean typography (system-fonts).

Tone: Intellectual, encouraging, and highly technical yet accessible.

Educational Annotations: Include a "Key Concepts" sidebar within the preview that explains what is happening during the animation.

Output: Provide only the full HTML code block.