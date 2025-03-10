import { ToolConfig, ToolParams } from "@open-agent-kit/core/app/types/tools";
import { tool } from "ai";
import { z } from "zod";
import { oak } from "../provider";
import { PluginConfig } from "../types";

const generateRandomNumber = ({ agentId }: ToolParams) =>
  tool({
    description: "Generate a random number",
    parameters: z.object({}),
    execute: async () => {
      const config = (await oak.getPluginConfig(agentId)) as
        | PluginConfig
        | undefined;
      const min = config?.min ?? 0;
      const max = config?.max ?? 100;
      const gen = Math.floor(Math.random() * (max - min + 1)) + min;
      return {
        min,
        max,
        generatedNumber: gen,
      };
    },
  });

export default {
  identifier: "randomNumber",
  name: "Random Number",
  description: "Generate a random number",
  tool: generateRandomNumber,
} satisfies ToolConfig;
