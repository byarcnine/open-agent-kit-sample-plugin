import React from "react";
import { withOAKContext } from "@open-agent-kit/core/utils/withOAKContext";
import { useLoaderData } from "react-router";
import { serverOnly$ } from "vite-env-only/macros";

export const loader = serverOnly$(
  withOAKContext(async ({ params, context }) => {
    const agentId = params.agentId as string;
    const oak = context.provider;
    return {
      agentId,
      config: await oak.getPluginConfig(agentId),
    };
  })
)!;

const ChatIndexRoute = () => {
  const { agentId, config } = useLoaderData();
  return (
    <div className="p-6 mx-auto bg-white rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        Sample Plugin Route on Agent - {agentId}
      </h2>
      <p className="text-gray-500">
        This is a sample plugin route. you can add any content here.
      </p>
      <p className="text-gray-500">Config: {JSON.stringify(config)}</p>
    </div>
  );
};

export default ChatIndexRoute;
