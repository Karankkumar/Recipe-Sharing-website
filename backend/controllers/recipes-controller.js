const Recipe = require("../model/Recipe");

const getAllRecipes = async(req,res,next)=>{
     // this route will provide all the recipes
    let recipes;
    try{
        recipes = await Recipe.find();
    }
    catch(err){
        console.log(err);
    }

    if(!recipes){
        return res.status(404).json({message: "No recipes found"});
    }

    return res.status(200).json({recipes});
}

const getById = async(req,res,next)=>{
    const id = req.params.id;
    let recipe;
    try{
        recipe = await Recipe.findById(id);
    }
    catch(err){
        console.log(err);
    }

    if(!recipe){
        return res.status(404).json({message: "No recipe found"});
    }

    return res.status(200).json({recipe});

}

const addRecipe = async (req,res,next)=>{
   const {name,author,description,recipeSteps,ingredients,time,image} = req.body;
   let recipe;
   try{
      recipe = new Recipe({
        name,
        author,
        description,
        recipeSteps,
        ingredients,
        time,
        image
      });
      await recipe.save();
   }
   catch(err){
    console.log(err);
   }

   if(!recipe){
    return res.status(500).json({message: "Unable to add recipe"});
   }
   return res.status(201).json({recipe}); // 201 for created
}

const updateRecipe = async(req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,recipeSteps,ingredients,time,image} = req.body;
    let recipe;
    try{
        recipe = await Recipe.findByIdAndUpdate(id,{
            name,
            author,
            description,
            recipeSteps,
            ingredients,
            time,
            image
        });
        recipe = await recipe.save();
    }
    catch(err){
        console.log(err);
    }

    if(!recipe){
        return res.status(404).json({message: "Unable to Update by this id"});
    }
       
    return res.status(200).json({recipe}); // 201 for created
}

const deleteRecipe = async (req,res,next)=>{
    const id = req.params.id;
    let recipe;
    try{
        recipe = await Recipe.findByIdAndDelete(id);
    }
    catch(err){
        console.log(err);
    }

    if(!recipe){
        return res.status(404).json({message: "Unable to delete by this id"});
    }
       
    return res.status(200).json({message: "recipe successfully deleted"});
}




exports.getAllRecipes = getAllRecipes;
exports.addRecipe = addRecipe;
exports.getById = getById;
exports.updateRecipe = updateRecipe;
exports.deleteRecipe = deleteRecipe;




