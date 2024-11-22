import { createOrder, showOrderById, updatedOrder } from "../controllers/orders.controller.js";
// import { createOrder, showOrderById, updatedOrder  } from "../controllers/admin.controller.js";

import express from "express";

export const orderRouter = express.Router();

orderRouter.post("/crear", createOrder);
orderRouter.get("/obtener", showOrderById);
orderRouter.put("/actualizar", updatedOrder);