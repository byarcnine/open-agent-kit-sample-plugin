import { ToolConfig, ToolParams } from "@open-agent-kit/core/app/types/tools";
import { tool } from "ai";
import { z } from "zod";
import { PluginConfig } from "../types";

const parameters = z.object({});

export type RandomNumberToolParams = z.infer<typeof parameters>;
export type RandomNumberToolResult = {
  min: number;
  max: number;
  generatedNumber: number;
};

const generateRandomNumber = ({ agentId, config, provider }: ToolParams) =>
  tool({
    description: "Generate a random number",
    parameters,
    execute: async (): Promise<RandomNumberToolResult> => {
      const oak = provider;
      const pluginConfig = (await oak.getPluginConfig(agentId)) as
        | PluginConfig
        | undefined;
      const min = pluginConfig?.min ?? 0;
      const max = pluginConfig?.max ?? 100;
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
