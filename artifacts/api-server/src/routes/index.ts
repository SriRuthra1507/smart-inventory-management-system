import { Router, type IRouter } from "express";
import healthRouter from "./health";
import productsRouter from "./products";
import dashboardRouter from "./dashboard";
import importRouter from "./import";

const router: IRouter = Router();

router.use(healthRouter);
router.use(importRouter);
router.use(productsRouter);
router.use(dashboardRouter);

export default router;
