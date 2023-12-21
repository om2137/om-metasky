# Om-Metasky App

Welcome to the Om-Metasky app! This app is built using Next.js 14 with Tailwind CSS, TypeScript, Redux, Axios, and Redux Persist. It provides a dashboard experience where users can log in, view a list of users, and Search users based on name.

## Table of Contents
- [Om-Metasky App](#om-metasky-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Setting up Local Dev environment](#setting-up-local-dev-environment)
  - [Performance Optimizations](#performance-optimizations)
  - [Redux State Persistence](#redux-state-persistence)
  - [Tech Stack](#tech-stack)

## Features

-   User authentication with login/logout functionality.
-   Display a list of users fetched from the [Random User API](https://randomuser.me/api).
-   Enable user search by name.
-   Persist user authentication state between sessions.

## Setting up Local Dev environment

To run the app locally, follow these steps:

1.  Clone the repository:
    
    bashCopy code
    
    `git clone https://github.com/your-username/om-metasky.git` 
    
2.  Install dependencies:
    
    bashCopy code
    
    `cd om-metasky
    npm install` 
    
3.  Run the development server:
    
    bashCopy code
    
    `npm run dev` 
    
    The app will be accessible at http://localhost:3000.
    

## Performance Optimizations

-   **Code Splitting:** The app leverages Next.js automatic code splitting, ensuring that only the necessary JavaScript is loaded for each page.
    
-   **Server-Side Rendering (SSR):** Critical components are rendered on the server, improving the initial page load time.
    
## Redux State Persistence

Redux state, including user authentication, is persisted using Redux Persist. This ensures that users remain logged in even if they close and reopen the app.

## Tech Stack

-   Next.js 13
-   Tailwind CSS
-   TypeScript
-   Redux Toolkit
-   Axios
-   Redux Persist
-   MUI
