import { DataTypes } from "sequelize";
import { sequelize } from "../config/index.js";

export const User = sequelize.define("users", {
  telegram_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: false,
    required: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    required: true,
    unique: true,
  },
  language_code: {
    type: DataTypes.STRING,
    defaultValue: "uz",
  },
  first_name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.INET,
  },
  email: {
    type: DataTypes.STRING,
  },
  verification_code: {
    type: DataTypes.INTEGER,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
