import OAKProvider from "@open-agent-kit/core";
import config from "../../config";
import pkg from "./package.json";

export const oak = OAKProvider(config, pkg.name);
