import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import outport from './config/outportConfig.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, resp) => {

    resp.status(200).send({ message: "success", status: 200 })

})

app.use('/login', authRoutes);
app.use('/users', userRoutes);
app.use('/docs', outport.serve());

export default app;
