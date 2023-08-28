import Log from "@src/middlewares/Log";
import { Application } from "express";
import  MainRoutes  from '@src/routes/main.routes';
import AuthRoutes from '@src/routes/auth.routes'

class Routes {
    public mountAPI(_express: Application){
        Log.info('Routes :: Mounting API Routes...');
        _express.use(`/`, MainRoutes);
        _express.use(`/auth`, AuthRoutes);
        return _express;
    }
}

export default new Routes