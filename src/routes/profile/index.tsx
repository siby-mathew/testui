import { Profile } from "@/screens/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/")({
  component: Profile,
});
