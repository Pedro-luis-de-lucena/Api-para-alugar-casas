import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import dashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', HouseController.destroy);
routes.get('/dashboard', dashboardController.show);
routes.post('/houses/:house_id/reserve', ReserveController.store);
routes.get('/reserves', ReserveController.index);
routes.delete('/reserves/cancel', ReserveController.destroy);
export default routes;
