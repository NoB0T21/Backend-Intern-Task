import { DataTypes } from "sequelize";
import sequelize from "../config/DB";

export const ProjectModel = sequelize.define("projects", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE
  },
  budget: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("planned", "active", "completed"),
    defaultValue: "planned"
  },
  created_by: {
    type: DataTypes.UUID
  }
},
{
  timestamps: false
});