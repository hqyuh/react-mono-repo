import sharedConfig from "@mono/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.{ts,tsx}"],
  prefix: "ui-",
  presets: [sharedConfig as Config],
};

export default config;
