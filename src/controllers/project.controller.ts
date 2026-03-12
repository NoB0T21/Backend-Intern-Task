import { Request, Response, NextFunction} from "express";
import ErrorHandler from "../utils/errorHandler";
import { Project } from "../utils/types/project";
import { addProject, deleteProduct, getProduct, getProductByPk, updateProject } from "../services/product.service";

export const createProject = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const {name,description,start_date,end_date,budget,location,status} = req.body
    const project: Project = {
      name,
      description,
      start_date,
      end_date,
      budget,
      location,
      created_by:req?.user?.id as string || '',
      status: status || 'planned'
    }
    const p = await addProject(project)
    if (!p){
      return next(new ErrorHandler("Project not created", 400));
    }
    res.status(201).json({
      success: "Project created",
      projectId: p.id
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export const getallProject = async (req: Request, res: Response, next:NextFunction) => {
  let status = req.query?.status as string
  let limit = req.query?.limit as unknown as number
  let offset = req.query?.offset as unknown as number
  try {
    const p = await getProduct(status,Number(limit),Number(offset))
    res.status(200).json({data:p});
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export const getProjectById = async (req: Request, res: Response, next:NextFunction) => {
  let id = req.params.id as string
  try {
    const p = await getProductByPk(id)
    res.status(200).json({data:p});
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export const updateProjectById = async (req: Request, res: Response, next:NextFunction) => {
  let id = req.params.id as string
  try {
    const project: Project = req.body 
    const p = await updateProject(project, id)
    if (!p){
      return next(new ErrorHandler("Project not updated", 400));
    }
    res.status(200).json({
      success: "Project updated",
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export const deleteProject = async (req: Request, res: Response, next:NextFunction) => {
  let id = req.params.id as string
  try {
    const p = await deleteProduct(id)
    if(p===0){
      return next(new ErrorHandler("Project not deleted", 400));
    }
    res.status(200).json({
      success: "Project deleted",
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}