import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import { TextField, Box } from '@mui/material';
import "./recipe.css";

const URL = "http://localhost:5000/recipes";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setRecipes(data.recipes));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <TextField
          label="Search Recipes..."
          variant="outlined"
          margin="normal"
          sx={{ width: '60%' }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>
      <div className='recipeContainer'>
        {filteredRecipes.map((recipe, i) => (
          <Recipe recipe={recipe} key={i} />
        ))}
      </div>
    </Box>
  );
}

export default Recipes;
