# Live Site Link: https://job-task-zettabyte-technology.vercel.app/
# 🧪 Frontend Developer Test – Zettabyte Technology Inc.

This project is built as part of the **Frontend Developer Test** for Zettabyte Technology Inc.  
The objective is to build a **mini dashboard** using **Next.js 15, TypeScript, Tailwind CSS, and Framer Motion**, focusing on **UI structure, reusability, and animations**.

---

## 🚀 Tech Stack
- **Next.js 15 (App Router + TypeScript)**
- **Tailwind CSS** (custom components only, no UI libraries)
- **Framer Motion** (animations)
- **React Hooks** for state & API management
- **Optional**: Auth.js (NextAuth) for authentication

---

## 🎯 Features

### ✅ Dashboard Home (`/`)
- Static summary section with welcome text & placeholder stats.
- Animated header/card using **Framer Motion**.

### ✅ Posts Page (`/posts`)
- Fetches posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- Displays posts in reusable **Card components**.
- Uses a custom `useFetch` hook for data fetching.
- Each post links to a **dynamic route** `/posts/[id]`.
- `/posts/[id]` → Fetches and displays details for a single post.

### ✅ Users Page (`/users`)
- Fetches users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
- Displays users in a **responsive table** (name, email, company).
- Clicking a row opens an **animated modal** with user details (Framer Motion).

### ✅ Reusability
- **Reusable Card component**.
- **Custom hook** (`useFetch`) for API calls with loading & error handling.

### ✅ Animations
- Smooth **sidebar animation** (collapsible).
- **Staggered card animations** for posts.
- **Animated modal** for user details.

### ✅ Error Handling
- Loading states shown during API calls.
- Error state with friendly message (`"Failed to load posts"`).
- Includes an **intentional error demo** (fetching from invalid endpoint).

### ⭐ Bonus (Optional)
- **Authentication with NextAuth.js**.
- Google login & protected `/profile` page showing logged-in user details.

---

## 📂 Project Structure
```plaintext
src/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/    # NextAuth routes
│   │           └── route.ts      # NextAuth API route
│   ├── components/               # Reusable UI Components
│   │   ├── Loader.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostCardSkeleton.tsx
│   │   ├── Sidebar.tsx
│   │   └── SidebarLayout.tsx
│   ├── hooks/                    # Custom Hooks
│   │   ├── useFetch.ts
│   │   ├── useInitialLoader.ts
│   │   └── useScheduleLoading.ts
│   ├── posts/                    # Posts Pages
│   │   ├── [id]/                 # Dynamic Post Details
│   │   │   └── page.tsx
│   │   └── page.tsx              # Posts list page
│   ├── profile/                  # Protected Profile Page
│   │   └── page.tsx
│   ├── users/                    # Users Page
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Dashboard Home
│   └── providers.tsx             # Context & Providers
│
├── .env.local                    # Environment variables
├── .gitignore
├── eslint.config.mjs             # ESLint configuration
├── next-env.d.ts                 # Next.js TypeScript types
├── next.config.ts                 # Next.js config
├── package-lock.json
├── package.json
└── tsconfig.json                 # TypeScript config
```
## Getting Started
```bash
First, run the development server:
```

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

```bash
npm install
```

```bash
npm run dev
```

# Visit → http://localhost:3000



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
