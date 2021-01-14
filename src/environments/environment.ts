export const environment = {
  production: false,
  name: window["env"]["name"] || "Environment Test App",
  version: window["env"]["version"] || "não especificada",
  environment: window["env"]["environment"] || "default",
  api: window["env"]["api"] || "https://sgi.detranpa.com",
  backgroundColor: window["env"]["backgroundColor"] || "black",
};