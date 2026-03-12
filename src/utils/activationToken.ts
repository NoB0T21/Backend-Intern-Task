import jwt from 'jsonwebtoken';
import { RUser } from './types/user';
import 'dotenv/config'

export const generateToken = (user: RUser) => {
    const secret = process.env.TOKEN_SECRET as string;
    try {
        return jwt.sign(
            user,
            secret,
            {
                expiresIn: "7d",
            }
        )
    } catch (error) {
        return null;
    }
}

export const verifyToken = (token:string):RUser | null => {
    const secret = process.env.TOKEN_SECRET as string;
    try {
        const d = jwt.verify(
            token,
            secret
        ) as RUser;
        return d;
    } catch (error) {
        return null;
    }
}