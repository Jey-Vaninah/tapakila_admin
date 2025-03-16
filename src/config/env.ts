const getEnvValue = (name: string): string => {
  return process.env[name]!;
};

export const Env = {
  apiUrl: getEnvValue("API_URL"),
};
