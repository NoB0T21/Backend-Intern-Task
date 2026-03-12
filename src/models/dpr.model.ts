import { DataTypes } from "sequelize";
import sequelize from "../config/DB";

export const DprModel = sequelize.define("daily_reports", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  weather: {
    type: DataTypes.STRING,
  },
  work_description: {
    type: DataTypes.TEXT
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  worker_count: {
    type: DataTypes.NUMBER
  },
  project_id: {
    type: DataTypes.UUID
  },
  user_id: {
    type: DataTypes.UUID
  }
},
{
  timestamps: false
});