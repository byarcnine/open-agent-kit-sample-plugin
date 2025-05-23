import type { PluginConfig } from "@open-agent-kit/core/app/types/plugins";
import { adminRoutes, userRoutes } from "./routes";
import randomNumber from "./tools/randomNumber";

const config = {
  description: "A Sample Plugin",
  slug: "sample-plugin",
  displayName: "Sample Plugin",
  adminRoutes,
  userRoutes,
  tools: [randomNumber],
} satisfies PluginConfig;

export default config;
