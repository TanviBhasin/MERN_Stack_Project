const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tanvi:123@cluster0.rvn6wln.mongodb.net/e-learning-project?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log("Database not Connected")
    console.log(err)
})