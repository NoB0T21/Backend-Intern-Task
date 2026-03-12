import { Request, Response, NextFunction} from "express";
import ErrorHandler from "../utils/errorHandler";
import sendToken from "../utils/JWTToken";
import { comparePassword, hashPassword } from "../utils/hashPassword";
import { createUser, getUser } from "../services/user.service";
import { RUser, User } from "../utils/types/user";

export const register = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { name, email, password, phone, role } = req.body;
        if(!name||!email||!password||!phone){
            return next(new ErrorHandler("All fields are require !!", 400));
        }
        const userEmail = await getUser(email);
        if (userEmail) {
            return next(new ErrorHandler("User already exits", 400));
        }
        const hashedPassword = await hashPassword(password)
        const user = await createUser({name, email, password: hashedPassword, phone, role});

        if (!user) {
            return next(new ErrorHandler("User not created", 400));
        }

        res.status(201).json({
            success: "User created, please login",
            userId: user.id,
        });
    } catch (err: any) {
        return next(new ErrorHandler(err.message, 400));
    };
};

export const loginUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new ErrorHandler("Please provide the all filelds", 400));
        }
        const user = await getUser(email)
        if (!user) {
            return next(new ErrorHandler("invalid email or password", 400));
        }

        // compore password with database password
        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return next(
            new ErrorHandler("invalid email or password", 400)
            );
        }
        const u: RUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            phone: user.phone,
        };
        sendToken(u, 200, res);
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
}

export const logoutUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(201).json({
            success: true,
            message: "Log out successful!",
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
}