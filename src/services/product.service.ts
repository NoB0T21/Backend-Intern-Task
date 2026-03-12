import { Project } from '../utils/types/project';
import { ProjectModel } from '../models/project.model';
import { DprModel } from '../models/dpr.model';

export const addProject = async (projectData: Project) => {
  return await ProjectModel.create(projectData);
};

export const getProduct = async (
  status?: string,
  limit: number = 10,
  offset: number = 0,) => {
  return await ProjectModel.findAll({
    where: status ? { status } : {},
    limit,
    offset
  });
};

export const getProductByPk = async (id:string) => {
  ProjectModel.hasMany(DprModel, {
    foreignKey: "project_id",
  });

  DprModel.belongsTo(ProjectModel, {
    foreignKey: "project_id"
  });
  return await ProjectModel.findByPk(id, {
    include: [
      {
        model: DprModel,
      }
    ]
  });
};

export const updateProject = async (projectData: Project,id:string) => {
  return await ProjectModel.update(projectData, { where: { id } });
};

export const deleteProduct = async (id:string) => {
  return await ProjectModel.destroy({
    where: { id }
  });
};