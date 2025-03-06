const getEnvValue = (name: string): string => {
  return import.meta.env[name];
};

export const Env = {
  apiUrl: getEnvValue("API_URL"),
};
