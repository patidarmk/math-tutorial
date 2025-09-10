import * as React from "react";
import {
  createRouter,
  RouterProvider,
  createRootRoute,
  createRoute as createTanStackRoute,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Assignments from "./pages/Assignments";
import AssignmentDetail from "./pages/AssignmentDetail";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetail";
import Progress from "./pages/Progress";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Baseline from "./pages/Baseline";
import BaselineFull from "./pages/BaselineFull";
import BaselinePractice from "./pages/BaselinePractice";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout />
      </TooltipProvider>
    </QueryClientProvider>
  ),
});

const indexRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/", component: Index });
const assignmentsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/assignments", component: Assignments });
const assignmentDetailRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/assignments/$id", component: AssignmentDetail });
const topicsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/topics", component: Topics });
const topicDetailRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/topics/$id", component: TopicDetail });
const progressRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/progress", component: Progress });
const aboutRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/about", component: About });
const contactRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/contact", component: Contact });

// ✅ Baseline hub + children
const baselineRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/baseline", component: Baseline });
const baselineFullRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: "/baseline/full", component: BaselineFull });
const baselinePracticeRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: "/baseline/practice/$topicId/$subId",
  component: BaselinePractice
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  assignmentsRoute,
  assignmentDetailRoute,
  topicsRoute,
  topicDetailRoute,
  progressRoute,
  aboutRoute,
  contactRoute,
  baselineRoute,
  baselineFullRoute,
  baselinePracticeRoute
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}