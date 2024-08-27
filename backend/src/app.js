import ex from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js ";
import taksRoutes from "./routes/taks.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = ex();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(ex.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taksRoutes);

export default app;
