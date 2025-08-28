# Project Overview

This project is a web application for connecting mentors and mentees, facilitating skill-sharing sessions and community engagement. The frontend is built with React and TypeScript, styled using Tailwind CSS, and uses Supabase as the backend for authentication and data storage.

## Folder Structure

```
/hanki-web
│
├── package.json
├── vite.config.ts
├── index.html
├── /public                  # Static assets (images, favicon, etc.)
├── /src
│   ├── main.tsx             # React entry point
│   ├── App.tsx              # Main App component and routing
│   ├── /components          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── MentorCard.tsx
│   │   ├── SessionCard.tsx
│   │   └── FeedbackForm.tsx
│   ├── /pages               # Application pages (routes/screens)
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── SessionsPage.tsx
│   │   ├── CommunityPage.tsx
│   │   └── ResourcesPage.tsx
│   ├── /hooks               # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useSessions.ts
│   │   └── useCommunity.ts
│   ├── /lib                 # Utilities and Supabase client
│   │   └── supabaseClient.ts
│   └── /styles              # Tailwind and global styles
│       └── index.css
└── ... (other config and asset files)
```

## Libraries and Frameworks

- React (v19) and React DOM for the frontend.
- TypeScript for type safety.
- Tailwind CSS for styling.
- Supabase for backend services (authentication, database).
- Vite for build tooling.
- Lucide React for icons.
- ESLint for linting.

## Coding Standards

- Use TypeScript for all source files.
- Use function components and React hooks.
- Prefer arrow functions for callbacks and component definitions.
- Use PascalCase for component and file names, camelCase for variables and functions.
- Use semicolons at the end of statements.
- Use single quotes for strings.
- Keep code modular and reusable (use `/components`, `/hooks`).
- Follow Tailwind CSS utility-first conventions for styling.

## UI Guidelines

- Design should be modern, clean, and accessible.
- Use Tailwind CSS for all styling.
- Ensure responsive layouts for desktop and mobile.
- Use consistent spacing and typography.
- Favor reusable UI components.

---

-->

## Tips

- Use TypeScript types and interfaces for better suggestions.
- Comment your code to describe logic or requirements before implementation.
- Use Copilot for repetitive code, boilerplate, and exploring new APIs.

---
