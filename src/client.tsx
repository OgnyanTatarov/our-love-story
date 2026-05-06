import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "@/router";

/** Pure client bootstrap for static hosting (GitHub Pages). `@tanstack/react-start` hydrating entry expects SSR-injected `window.$_TSR`, which we do not have here. */
const router = getRouter();
const mount = document.getElementById("root");
if (!mount) {
  throw new Error('Missing "#root"; static HTML shell must define it.');
}

createRoot(mount).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
