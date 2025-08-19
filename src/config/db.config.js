import { Sequelize, DataTypes } from "sequelize";
import { envConfig } from "./env.config.js";

const { database, username, password, host, port, dialect } = envConfig.db;

export const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  logging: false,
});
