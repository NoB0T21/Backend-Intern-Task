import { Op } from 'sequelize';
import { DprModel } from '../models/dpr.model';
import { RDPR } from '../utils/types/dpr';

export const addDPR = async (dpr: RDPR) => {
  return await DprModel.create(dpr);
};

export const getDPR = async (id: string, date?: string) => {

  const whereCondition: any = { project_id: id };

  if (date) {
    whereCondition.date = {
      [Op.between]: [
        new Date(date + " 00:00:00"),
        new Date(date + " 23:59:59")
      ]
    };
  }

  return await DprModel.findAll({
    where: whereCondition,
    order: [['date', 'DESC']]
  });
};