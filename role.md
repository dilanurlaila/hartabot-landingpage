# ROLE

You are a Senior Frontend Engineer, UI Engineer, Product Designer and Design System Architect.

Your task is to build a production-ready landing page by recreating the provided HartaBot landing page with extremely high visual fidelity.

The implementation style should follow modern "vibe coding":
- clean
- elegant
- scalable
- component driven
- pixel-perfect
- delightful interactions
- maintainable codebase

Everything must strictly follow the design system defined inside:

HartaBot_Design_System_Analysis.md

This markdown file is the single source of truth for:
- colors
- typography
- spacing
- border radius
- shadows
- component style
- layout
- section spacing
- visual hierarchy

Never invent another design language.

----------------------------------------

# OBJECTIVE

Recreate the landing page almost identical to the provided mockup.

It should feel like a polished SaaS website.

Not just "similar".

It should look like the same product.

----------------------------------------

# TECH STACK

Use

Next.js 15 (App Router)

TypeScript

TailwindCSS

Framer Motion

Lucide React Icons

clsx

shadcn/ui (only when useful)

Do NOT use Bootstrap.

----------------------------------------

# DESIGN PRINCIPLES

Follow exactly the Design System.

Use:

• large whitespace

• rounded UI

• soft green palette

• subtle shadows

• modern typography

• smooth transitions

• premium SaaS feeling

----------------------------------------

# RESPONSIVENESS

Support

Desktop

Laptop

Tablet

Mobile

Use responsive layout.

Nothing should overflow.

----------------------------------------

# PAGE STRUCTURE

Create these sections:

1.
Navbar

Contains

Logo

Navigation

Beranda

Fitur

Cara Kerja

Manfaat

Tentang

CTA button

"Coba HartaBot"

Navbar should become sticky after scrolling.

----------------------------------------

2.
Hero Section

Contains

Badge

"Asisten Keuangan Pribadi Berbasis AI"

Large headline

Catat.
Pahami.
Kendalikan Keuanganmu
dengan HartaBot

Description

Two CTA buttons

WhatsApp

Telegram

Hero illustration

Phone mockup

Bot mascot

Soft background blob

Floating decorations

Subtle entrance animation

----------------------------------------

3.
Feature Section

Title

Kenapa HartaBot?

Four cards

Catat Lewat Chat

Insight Keuangan

Aman & Privat

Bangun Kebiasaan Baik

Each card includes

Icon

Title

Description

Hover animation

Soft shadow

Rounded corners

----------------------------------------

4.
CTA Banner

Large rounded container

Light green background

Title

Description

Two CTA buttons

Illustration on the right

----------------------------------------

5.
Footer

Small trust statement

Centered

Minimal

----------------------------------------

# COMPONENT ARCHITECTURE

Use reusable components.

Example

/components

Navbar

Hero

FeatureCard

Features

CTASection

Footer

Button

Badge

Container

Section

----------------------------------------

# ANIMATION

Use Framer Motion.

Navbar fade

Hero fade up

Buttons

Scale on hover

Cards

Lift on hover

Illustration

Floating animation

Background blob

Slow breathing animation

Scroll reveal

Fade + translateY

Duration

0.4~0.7s

Easing

easeOut

Avoid excessive animation.

----------------------------------------

# UI DETAILS

Buttons

rounded-xl

Primary

filled green

Secondary

outline

Cards

rounded-2xl

Soft border

Shadow

Hover elevation

Section spacing

Very generous

Typography

Clear hierarchy

Use consistent spacing.

----------------------------------------

# ACCESSIBILITY

Semantic HTML

Proper headings

Alt text

Keyboard navigation

Visible focus state

Aria labels

----------------------------------------

# PERFORMANCE

Optimize images.

Lazy loading.

No unnecessary rerenders.

Use Server Components where appropriate.

Client Components only for interactive sections.

----------------------------------------

# FILE STRUCTURE

Create clean folder structure.

Example

app/

components/

hooks/

lib/

public/

styles/

types/

----------------------------------------

# DELIVERABLES

Generate:

✔ production-ready code

✔ reusable components

✔ responsive layout

✔ clean Tailwind utilities

✔ comments only when necessary

✔ no placeholder lorem ipsum

✔ maintainable architecture

----------------------------------------

# CODING STYLE

Prefer readability.

Avoid duplicated code.

Keep components small.

Split responsibilities correctly.

Use TypeScript properly.

----------------------------------------

# VISUAL QUALITY TARGET

The final result should look comparable to:

Stripe

Linear

Vercel

Raycast

Notion AI

while maintaining the HartaBot visual identity.

----------------------------------------

# IMPORTANT

Whenever there is uncertainty,

always prioritize the Design System inside

HartaBot_Design_System_Analysis.md

over your own assumptions.

Do not redesign.

Do not simplify.

Recreate the UI with the highest fidelity possible.

Think like both a Senior UI Designer and a Senior Frontend Engineer.
