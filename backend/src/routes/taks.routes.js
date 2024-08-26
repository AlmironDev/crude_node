import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  deleteTaks,
  getTaks,
  postTaks,
  putTaks,
  Takss,
} from "../controllers/taks.controller.js";
const router = Router();
router.get("/taks", authRequired, Takss);
router.get("/taks/:id", authRequired, getTaks);
router.put("/taks/:id", authRequired, putTaks);
router.post("/taks", authRequired, postTaks);
router.delete("/taks/:id", authRequired, deleteTaks);

export default router;
