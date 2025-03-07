"use client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Header from "./components/header";
import Articles from "./components/articles";
import ArticleDetail from "./components/article-detail";
import Projects from "./components/projects";
import ProjectDetail from "./components/project-detail";
import Shaders from "./components/shaders";
import ShaderDetail from "./components/shader-detail";
import Resume from "./components/resume";
import ShaderScene from "./components/shader-home";
import "./index.css";

// Define the root route with the layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <Outlet />
      </main>
    </div>
  ),
});

// Define the index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ShaderScene,
});

// Define the route for Articles
const articlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/articles",
  component: Articles,
});

// Define the route for Article Detail
const articleDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/articles/$articleId",
  component: ArticleDetail,
});

// Define the route for Projects
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

// Define the route for Project Detail
const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$projectId",
  component: ProjectDetail,
});

// Define the route for Shaders
const shadersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shaders",
  component: Shaders,
});

// Define the route for Shader Detail
const shaderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shaders/$shaderId",
  component: ShaderDetail,
});

// Define the route for Resume
const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resume",
  component: Resume,
});

// Create the router with all routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  articlesRoute,
  articleDetailRoute,
  projectsRoute,
  projectDetailRoute,
  shadersRoute,
  shaderDetailRoute,
  resumeRoute,
]);

const router = createRouter({ routeTree });

// Register the router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("app");
if (!rootElement?.innerHTML) {
  const root = createRoot(rootElement || document.body);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default function Home() {
  return null; // This is needed for Next.js compatibility in Next.js
}
