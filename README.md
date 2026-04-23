HiredAI: Rapid MVP Waitlist
A high-performance, cloud-native landing page built to validate an AI-driven recruitment startup. This project focuses on developer velocity and serverless architecture, moving from concept to functional data collection in under 4 hours.

🛠️ Tech Stack
Frontend: Next.js 14 (App Router, TypeScript)

Styling: Tailwind CSS & Shadcn UI

Backend/Database: Supabase (PostgreSQL + Row Level Security)

Infrastructure: GitHub Codespaces (Cloud Development Environment)

Deployment: Vercel

🧠 Engineering Challenges & Solutions
1. Hardware-Agnostic Development
Problem: Local disk space constraints interrupted the standard node_modules installation.
Solution: Migrated the entire development lifecycle to GitHub Codespaces. This allowed for a high-performance, containerized environment that bypasses local hardware limitations, demonstrating a "Cloud-First" engineering mindset.

2. Secure Data Ingestion (RLS)
Problem: Initial database inserts failed due to PostgreSQL Row Level Security (RLS) policies.
Solution: Architected a specific RLS policy to allow anonymous public INSERT operations while maintaining strictly restricted SELECT/UPDATE permissions, ensuring user privacy while enabling seamless sign-ups.

3. AI-Assisted Component Architecture
Problem: Rapidly building 20+ UI components (Buttons, Inputs, Modals) from scratch is time-inefficient for an MVP.
Solution: Utilized v0.dev and Shadcn CLI to generate modular, accessible components, focusing my engineering efforts on backend integration and data flow rather than rote CSS writing.





👨‍🎓 About the Developer
Srijanee Seth
Final-year ECE Student at Netaji Subhash Engineering College.
Interested in Signal Processing, Machine Learning, and Cloud Architecture. Exploring the intersection of deep technical analysis and modern web scale.

