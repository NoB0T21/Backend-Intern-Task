import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sequelize from "./config/DB";

sequelize.authenticate().then(() => {
  console.log("Database connected successfully");
}).catch((err:any) => {
  console.error("Database connection failed:", err);
});

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:4000',
    credentials: true,
}))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
import authRoutes from './routes/auth.route';
import projectRoutes from './routes/project.route';
import dprRoutes from './routes/daily.report.route';

app.use("/auth", authRoutes)
app.use("/projects", projectRoutes)
app.use("/", dprRoutes)
export default app;