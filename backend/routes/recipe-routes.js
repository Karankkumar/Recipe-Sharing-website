const express = require("express");
const router = express.Router();
const Recipe = require("../model/Recipe");
const recipesController = require("../controllers/recipes-controller");


router.get("/", recipesController.getAllRecipes);
router.post("/",recipesController.addRecipe);
router.get("/:id",recipesController.getById);
router.put("/:id",recipesController.updateRecipe);
router.delete("/:id",recipesController.deleteRecipe);

module.exports = router;