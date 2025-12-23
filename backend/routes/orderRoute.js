import express  from 'express';
import authMiddleware from '../midleware/auth.js';
import { placeOrder, userOrder, verifyOrder, listOrders, updateOrderStatus } from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status", updateOrderStatus);


export default orderRouter;



