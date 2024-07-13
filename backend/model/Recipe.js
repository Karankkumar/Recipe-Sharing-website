const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipeSteps:{
        type: [String],
        required: true
    },
    ingredients: {
        type: String, // Array of strings
        required: true
    },
    time: {
        type: String, // Represented as a number (e.g., in minutes)
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Recipe",recipeSchema);
// mongodatabase it is stored as recipes