import {Request, Response, NextFunction} from 'express'
class MainController {
    public static index(req: Request, res: Response, next: NextFunction){
            return res.send({name: 'Ngoccccccccc'})
    }
}

export default MainController