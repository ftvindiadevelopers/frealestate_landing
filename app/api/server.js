import rxpress from 'rxpress';
import enquiryRoutes from './routes/enquiryRoutes.js';
import apiRouter from './router/apiRouter.js';

const app = rxpress();

app.use('/api/', enquiryRoutes);

export default app;
import db from './config/database.js';