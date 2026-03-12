import { Request, Response, NextFunction} from "express";
import ErrorHandler from "../utils/errorHandler";
import { DPR, RDPR } from "../utils/types/dpr";
import { addDPR, getDPR } from "../services/dpr.service";

export const createDpr = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const data: DPR = req.body 
    const id =  req.params.id as string
    const userId = req?.user?.id as string || ''
    const dpr: RDPR ={
        weather:data.weather,
        date:data.date,
        work_description:data.work_description,
        worker_count:data.worker_count,
        project_id:id,
        user_id:userId
    }
    const p = await addDPR(dpr)
    if (!p){
      return next(new ErrorHandler("Daily Project Report not created", 400));
    }
    res.status(201).json({
      success: "Daily Project Report created",
      dprId: p.id
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}

export const getDpr = async (req: Request, res: Response, next:NextFunction) => {
  try { 
    const id =  req.params.id as string
    const date = req?.query.date as string

    const p = await getDPR(id, date)
    if (!p){
      return next(new ErrorHandler("cound not get Daily Project Report", 400));
    }
    res.status(200).json({
      data:p 
    });
  } catch (error: any) {
    return next(new ErrorHandler(error.message, 500));
  }
}