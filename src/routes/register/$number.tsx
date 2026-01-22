import { Register } from "@/screens/register";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register/$number")({
  component: Register,
});
