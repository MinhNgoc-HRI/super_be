import { NextFunction, Request, Response } from "express";

class  AuthController {
    public static login(req: Request, res: Response, next: NextFunction){
        return res.send({
            message: 'SUCCESS',
            data: {
                name: 'Ngoc',
                age: 29,
                role: 'Admin'
            },
            status: 200
        })
    }
}

export default AuthController