import type { PluginConfig } from "@open-agent-kit/core/app/types/plugins";
import routes from "./routes";
import randomNumber from "./tools/randomNumber";

const config = {
  description: "{{description}}",
  slug: "{{kebab name}}",
  displayName: "{{name}}",
  routes: routes,
  // menuItems: [
  //   {
  //     label: "Oak Sample Plugin",
  //     href: "/",
  //     icon: "Codesandbox",
  //   },
  // ],
  tools: [randomNumber],
} satisfies PluginConfig;

export default config;
