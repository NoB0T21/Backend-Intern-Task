import { DataTypes } from "sequelize";
import sequelize from "../config/DB";

export const UserModel = sequelize.define("users", {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.ENUM("admin", "manager", "worker"),
    defaultValue: "worker"
  },
  phone: {
    type: DataTypes.STRING
  }
},{
  timestamps: false,
});