import { Request, Response, NextFunction, RequestHandler } from "express"


export default (asyncFn): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        asyncFn(req, res, next).catch(next)
    }
}