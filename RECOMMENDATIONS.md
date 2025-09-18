# Recommendations for Improvement

Well done! Here are some recommendations for your next project

### 1. Prisma Client in Frontend

* **Issue:** Prisma client and generated binaries are currently bundled in the frontend.
* **Why it matters:** Bundling Prisma in a browser app is error-prone, adds unnecessary complexity, and bloats the repository size.
* **Suggestion:** Move Prisma usage to the backend or an API layer, and expose only the required data through API endpoints.

### 2. Querying & State Management

* **Suggestion:** Consider using [TanStack Query](https://tanstack.com/query/latest) when implementing  the backend:
* **Benefits:** Provides caching, retries, and status management out of the box, which can simplify data fetching logic and improve reliability.

### 3. Logging

* **Suggestion:** Add meaningful log lines throughout the application.
* **Benefits:** During development and debugging, this will help detect and resolve issues faster.

### 4. Environment Configuration & Secrets

* **Issue:** Committing real environment keys to the repo can pose security risks.
* **Suggestion:** Use a `.env.example` file to document required keys, and ensure real secrets are excluded from version control.
* **Benefits:** Improves security and makes onboarding easier for new developers.
