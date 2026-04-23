# Accredian Enterprise Demo

A robust, enterprise-grade landing page for Accredian's B2B offering, featuring high-end 3D visual enhancements, clean grid architectures, and seamless responsive design.

## 🚀 Setup Instructions

This project is built with **Next.js 14+ (App Router)** and **Tailwind CSS**.

### Prerequisites
- Node.js 18.17 or later

### Local Development
1. Clone the repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Approach Taken

My primary focus was to merge a highly professional corporate aesthetic with modern, dynamic web design. 

- **Framework:** Next.js (App Router) was used to ensure SEO best practices, fast rendering, and clean file-system-based routing.
- **Styling:** Tailwind CSS was utilized extensively to maintain a strict design system without writing monolithic CSS files. I leveraged custom color mixing (`color-mix`) and deep CSS variables to establish a unified "accent" theme.
- **Visual Engagement:** I incorporated `framer-motion` concepts manually and built a custom `TiltSurface` component using strict CSS transforms (`transform-style: preserve-3d` and `translateZ`) to provide sophisticated parallax hover effects without heavy performance hits.
- **Image Integration:** Authentic photography from the Accredian domain was placed into static layout grids mimicking the original live website, balancing out the intricate 3D WebGL hero animations.

---

## 🤖 AI Usage Explanation

AI was instrumental in accelerating the development of this prototype, primarily in the following areas:

1. **Scaffolding and Boilerplate:** AI quickly seeded the initial React components for the various sections (Testimonials, Domain Expertise, Lead Capture).
2. **Advanced Styling:** I leveraged AI to compute complex CSS gradients, radial background blur configurations, and shadow depths to achieve the "glassmorphism" effect that looks professional rather than chaotic.
3. **Refactoring Layouts:** When adjusting the UI from intense 3D grid designs back to a clean 3-column corporate layout, AI efficiently reconstructed the Tailwind grid logic while safely preserving the core content.

---

## 🔮 Improvements With More Time

Given additional time, I would elevate the product in several key ways:

1. **Backend Integration:** Hook up the Lead Capture Form to an actual CRM (like HubSpot or Salesforce) or database (via Supabase or Prisma) instead of logging to the console.
2. **Authentication:** Implement `NextAuth` for a corporate dashboard so B2B clients can view live analytics of their cohorts (currently shown as static snapshots in the Hero section).
3. **Animation Libraries:** Transition custom CSS tilt logic to a robust physics-based animation library like Framer Motion for more elastic, spring-based interactions.
4. **Accessibility (a11y) Polish:** Conduct a deeper pass with ARIA attributes and screen-reader testing to ensure absolute compliance with WCAG 2.1 AA standards, crucial for enterprise clients.

---

## 🌍 Deployment

You can seamlessly deploy this to Vercel:
1. Push your code to your GitHub repository.
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click "Add New... > Project".
3. Import this GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Next.js and apply the correct build settings.
