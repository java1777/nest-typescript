import { config } from "dotenv";

const path =
  process.env.NODE_ENV === "development" ? ".env.development" : ".env";

config({ path });

export const envConfig = {
  app: {
    port: +process.env.PORT || 5000,
  },
  db: {
    port: +process.env.DB_PORT || 5433,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
  },
  bot: {
    token: process.env.BOT_TOKEN,
  },
};
