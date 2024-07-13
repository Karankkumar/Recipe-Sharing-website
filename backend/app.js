const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/recipe-routes");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/recipes",router) // localhost:5000/recipes

mongoose.connect(
    "mongodb+srv://karann2207:2fbTpulKB7FXIS4j@cluster0.uojx0gq.mongodb.net/recipesite?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("Connected to database")
}).then(()=>{
    app.listen(5000)
}).catch((err)=>{
    console.log(err)
})


// mongodb+srv://karann2207:<password>@cluster0.uojx0gq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// 2fbTpulKB7FXIS4j