import express from 'express';
import Routes from './Routes';

const PORT = 3000
class Express {
    public express: express.Application
    constructor(){
        this.express = express();
        this.mountRoutes()
    }
    private mountRoutes (): void {
		this.express = Routes.mountAPI(this.express);
	}
    public init(): void{
       this.express.listen(PORT, ()=> {
        return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${PORT}'`);
       })
    }
}

export default new Express();