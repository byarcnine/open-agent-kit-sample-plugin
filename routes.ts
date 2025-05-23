import { index, type RouteConfig } from "@react-router/dev/routes";

export const adminRoutes = [
  index("./routes/admin/_index.tsx"),
] satisfies RouteConfig;

export const userRoutes = [
  index("./routes/user/_index.tsx"),
] satisfies RouteConfig;
