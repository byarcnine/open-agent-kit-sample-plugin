import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { oakContext } from "@open-agent-kit/core/app/lib/middleware/oakMiddleware.server";

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const agentId = params.agentId as string;
  const { provider } = context.get(oakContext);
  return {
    agentId,
    config: await provider.getPluginConfig(agentId),
  };
};

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
