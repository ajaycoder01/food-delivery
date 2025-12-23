
import express from 'express'

import  {addFood,listfood,removeFood} from '../controllers/foodController.js';
// const addFood = require('../controllers/foodController.js');
import multer from "multer";
import authMiddleware from "../midleware/auth.js";
import adminAuth from "../midleware/auth.js";

const foodRouter = express.Router();

// image storage engine--------
 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
});
                 
const upload = multer({storage:storage});

foodRouter.post(
  "/add",
  authMiddleware,     // pehle user login check
  adminAuth,          // phir admin check
  upload.single("image"),
  addFood
);

foodRouter.get('/list',listfood)
foodRouter.post('/remove',
     authMiddleware,
  adminAuth,
  removeFood);



export default foodRouter;

