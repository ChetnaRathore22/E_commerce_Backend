import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rathorechetna03:rathorechetna03@cluster0.kfb0xej.mongodb.net/EShop?retryWrites=true&w=majority")
.then(result=>{console.log("dataBase Create");
})
.catch(err=>{console.log(err);})

export default mongoose.connection;