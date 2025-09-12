# ATLAS

Atlas is a web application for connecting mentors and mentees, facilitating skill-sharing sessions, and building a supportive community. The project leverages React, TypeScript, Tailwind CSS, and Supabase for a modern, scalable, and maintainable developer experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Coding Standards](#coding-standards)
- [UI Guidelines](#ui-guidelines)
- [ESLint Configuration](#eslint-configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Atlas enables users to:
- Sign up and authenticate securely.
- Browse and book mentorship sessions.
- Join a community of learners and mentors.
- Access resources and provide feedback.

The frontend is built with React and TypeScript, styled using Tailwind CSS, and uses Supabase for backend services (authentication, database, and storage).

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React (icons)
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **Tooling:** ESLint, Prettier, Vite
- **Other:** React Router, Custom Hooks

---

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

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Supabase](https://supabase.com/) project (for backend)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/hanki-web.git
   cd hanki-web
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in your Supabase credentials.

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

---

## Available Scripts

- `npm run dev` — Start the development server with hot reloading.
- `npm run build` — Build the app for production.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint to check for code issues.

---

## Coding Standards

- Use **TypeScript** for all source files.
- Use **function components** and **React hooks**.
- Prefer **arrow functions** for callbacks and component definitions.
- Use **PascalCase** for component and file names, **camelCase** for variables and functions.
- Use **semicolons** at the end of statements.
- Use **single quotes** for strings.
- Keep code modular and reusable (use `/components`, `/hooks`).
- Follow **Tailwind CSS** utility-first conventions for styling.

---

## UI Guidelines

- Design should be **modern, clean, and accessible**.
- Use **Tailwind CSS** for all styling.
- Ensure **responsive layouts** for desktop and mobile.
- Use consistent spacing and typography.
- Favor reusable UI components.

---

## ESLint Configuration

This project uses ESLint for code linting. For production applications, enable type-aware lint rules as shown below:

```js
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes.
4. Push to your branch and open a Pull Request.

---

## License

[MIT](LICENSE)

---
