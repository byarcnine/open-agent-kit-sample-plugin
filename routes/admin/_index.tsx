import React from "react";
import {
  ActionFunctionArgs,
  Form,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import { PluginConfig } from "../../types";
import { oakContext } from "@open-agent-kit/core/app/lib/middleware/oakMiddleware.server";

export const action = async ({
  request,
  params,
  context,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const agentId = params.agentId as string;
  const { provider } = context.get(oakContext);

  const min = formData.get("min");
  const max = formData.get("max");

  await provider.setPluginConfig(agentId, { min, max });

  return { success: true };
};

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
  const agentId = params.agentId as string;
  const { provider } = context.get(oakContext);

  const config = (await provider.getPluginConfig(agentId)) as
    | PluginConfig
    | undefined;
  return { config };
};

export default () => {
  const actionData = useActionData();
  const { config } = useLoaderData();
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl">
      <h2 className="text-xl font-bold mb-4">Sample Plugin Configuration</h2>

      <Form method="post" className="space-y-4">
        <div>
          <label
            htmlFor="min"
            className="block text-sm font-medium text-gray-700"
          >
            Minimum Value
          </label>
          <input
            type="number"
            defaultValue={config?.min}
            id="min"
            name="min"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="max"
            className="block text-sm font-medium text-gray-700"
          >
            Maximum Value
          </label>
          <input
            type="number"
            defaultValue={config?.max}
            id="max"
            name="max"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Configuration
        </button>
      </Form>

      {actionData?.success && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Configuration updated successfully!
        </div>
      )}
    </div>
  );
};
