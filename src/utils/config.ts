type AppConfig = {
  baseUrl: string;
};
export const AppConfig={
initAppConfig,
getConfig
}
let config: AppConfig | null = null;

export function initAppConfig(userConfig: AppConfig) {
  config = userConfig;
}

export function getConfig(): AppConfig {
  if (!config) {
    throw new Error("App is not initialized. Call initAppConfig() first.");
  }
  return config;
}