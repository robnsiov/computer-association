import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "app",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
