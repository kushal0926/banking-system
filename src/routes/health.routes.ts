import { Router } from "express";
import httpStatus from "http-status";

export const createHealthRouter = () => {
  const healthRouter = Router();

  healthRouter.get("/health", (_, res) => res.status(httpStatus.OK).send("ok"));

  return healthRouter;
};
