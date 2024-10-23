import type { Config } from "tailwindcss";
import sharedConfig from "@mono/tailwind-config";

const config: Config = {
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.{ts,tsx}"],
  prefix: "ui-",
  presets: [sharedConfig as Config],
};

export default config;
