import { generateToken } from "./activationToken";
import { RUser } from "./types/user";
import { CookieOptions, Response } from "express";

const sendToken = (user: RUser, statusCode: number, res: Response) => {
    const token = generateToken(user);

    // Options for cookies
    const options: CookieOptions = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "lax",
        secure: process?.env?.PRODUCTION === 'true',
    };

    res.status(statusCode)
    .cookie("token", token, options)
    .json({
        success: "user logged in successfully",
        user,
        token,
    });
};

export default sendToken;