import { User } from '../utils/types/user';
import { UserModel } from '../models/user.model';

export const getUser = async (email: string) => {
  return await UserModel.findOne({
    where: { email },
    raw: true
  });
};

export const createUser = async (userData: User) => {
  return await UserModel.create(userData);
};