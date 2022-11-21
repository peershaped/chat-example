import { lazy } from "react";

/**
 * These routes correspond to the 'internal' pages, i.e. views, of the platform.
 */
export const routes = [
  {
    path: "/fullscreen",
    component: lazy(() => import("./FullscreenChat")),
    exact: true
  },
  {
    path: "/detail",
    component: lazy(() => import("./Detail")),
    exact: true
  }
];
