import { NextFunction, Request, Response } from 'express'
import ErrorHandler from '../utils/errorHandler';
import { verifyToken } from '../utils/activationToken';
import { RUser } from '../utils/types/user';

declare global {
    namespace Express {
        interface Request {
            user?: RUser;
        }
    }
}
const authoMiddleware = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.cookie;
            if (!authHeader || !authHeader.startsWith('token=')) return next(new ErrorHandler("Invalid Access Token", 400));
            
            const accessToken = authHeader.split("=")[1];
            const user = await verifyToken(accessToken)
            if(!user) return next(new ErrorHandler("Invalid Access Token", 403));
            // console.log(user.role,roles,roles.includes(user?.role))
            if(!roles.includes(user?.role||'')) return next(new ErrorHandler("Unauthorized Access", 401));
            req.user = user;
            next();
        } catch (error: any) {
            return next(new ErrorHandler(error, 400));
        }
    }
}

export default authoMiddleware;