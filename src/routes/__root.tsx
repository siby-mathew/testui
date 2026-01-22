import { AppLayout } from "@/layouts/main";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: AppLayout,
  notFoundComponent: function () {
    return <div>oops</div>;
  },
});
