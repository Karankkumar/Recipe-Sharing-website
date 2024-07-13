import Header from "./components/Header"
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipe/Recipes";
import RecipeDetails from "./components/Recipe/RecipeDetails";
import RecipePage from "./components/Recipe/RecipePage";

function App() {

  return (
    <> 
    <header>
      <Header/>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element={<AddRecipe/>} exact/>
        <Route path="/recipes" element={<Recipes/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="recipes/:id" element={<RecipeDetails/>} exact/> 
        <Route path="recipes/recipepage/:id" element={<RecipePage/>} exact/>
      </Routes>
    </main>
    
    </>
  )
}

export default App
