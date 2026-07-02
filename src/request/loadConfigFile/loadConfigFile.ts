import type {ConfigFileType} from "./types.ts";

export const loadConfigFile = async () => {
  const res = await fetch('/data.json');
  if (!res.ok) {
    throw new Error('Failed to load config');
  }
  return res.json() as Promise<ConfigFileType>;
}
