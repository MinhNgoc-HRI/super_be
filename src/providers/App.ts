import Log from '@src/middlewares/Log';
import Express from './Express'
class App {
    public  loadServer(){
        Log.info('Server :: Booting @ Master...');
        Express.init();
    }
}

export default new App