# ECONE - Circular Formwork Panels Built from Recycled Plastic

![ECONE Project](https://github.com/deveshmishra2811/ECONE/assets/placeholder.png)

Welcome to the **ECONE** website repository! This is a complete, production-ready website built to showcase ECONE's innovative recycled plastic formwork panels designed for the circular economy.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** TypeScript
- **Fonts:** Inter & Outfit (via Google Fonts)

## 🛠️ Getting Started

First, make sure you have your dependencies installed:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/` - Contains all the Next.js routes (pages like `/product`, `/applications`, `/impact`, etc.)
- `src/components/` - Contains reusable UI components (`Header`, `Footer`, `RecyBot`, `WhatsAppFloat`)
- `src/lib/constants.ts` - The central source of truth for the site's brand copy, pricing, navigation, and contact info.
- `public/images/` - Static assets and product images.

## 🌍 Key Features

- **Dynamic Navigation:** Multi-level dropdowns managed via a single configuration file.
- **Cost & Carbon Calculator:** Interactive tool to estimate financial and environmental savings.
- **Lead Generation:** Pilot booking forms ready to be hooked up to your CRM/Razorpay.
- **RecyBot:** An automated FAQ widget designed specifically for ECONE's business rules.
- **Fallback Routing:** A smart catch-all route (`[...slug]/page.tsx`) ensures there are no broken links across the site.

## 📝 License

This project is proprietary to the ECONE team.
