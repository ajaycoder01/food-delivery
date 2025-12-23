
import mongoose from 'mongoose';
export const connectDB =async ()=>{
   await mongoose.connect("mongodb+srv://test-user:ajaytest@clustertest.kbvvrqf.mongodb.net/food-delivery?appName=clusterTest").then(()=>{
        console.log("DB Connected");
    })
}