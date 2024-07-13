import React, { useEffect } from "react";
import { FormLabel, TextField, Box, Button,Typography,} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import BackspaceIcon from '@mui/icons-material/Backspace';
import {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const AddRecipe = () => {
  const history = useNavigate();
  const [Step,setStep] = useState("");
  const [recipeSteps,setrecipeSteps] = useState([]);

  const [inputs,setinputs] = useState({
    name: "",
    author: "",
    description: "",
    // recipeSteps: [],
    ingredients: "",
    time: "",
    image: ""
  });


  // whenever recipesteps array changes, updating the inputs.recipestpes
  // useEffect(() => {
  //   setinputs((prevInputs) => ({
  //     ...prevInputs,
  //     recipeSteps: recipeSteps
  //   }));
  // }, [recipeSteps]);

  const addStep=()=>{
    setrecipeSteps([...recipeSteps,Step]);
    setStep("");
  }

  const deleteItem = (index) => {
    setrecipeSteps(recipeSteps.filter((_, i) => i !== index));
  };

  // when any fieid of inputs state changes,update the input states
  const handleinputChange=(e)=>{
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
    // console.log(inputs);
  }

  

  // fuction to sendrequest to database to add the new recipe stored in inputs state.
  const sendRequest = async () => {
    await axios.post('http://localhost:5000/recipes',{
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      recipeSteps: recipeSteps,
      ingredients: String(inputs.ingredients),
      time: String(inputs.time),
      image: String(inputs.image)
    }).then(res=>res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.name.trim() &&
      inputs.author.trim() &&
      inputs.description.trim() &&
      recipeSteps.length > 0 &&
      inputs.ingredients.trim() &&
      inputs.time.trim() &&
      inputs.image.trim()
    ) {
      sendRequest().then(() => history('/recipes'));
    } else {
      alert('Please fill out all fields.');
    }
  }


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      maxWidth={700}
      alignContent={"center"}
      alignSelf={"center"}
      marginLeft={"auto"}
      marginRight={"auto"}
    >
      <form onSubmit={handleSubmit}>

        
        <TextField
          name="name"
          margin="normal"
          fullWidth
          variant="outlined"
          placeholder="Recipe Name..."
          value={inputs.name}
          onChange={handleinputChange}
          
        />

        <TextField
          name="author"
          margin="normal"
          fullWidth
          variant="outlined"
          placeholder="By..."
          value={inputs.author}
          onChange={handleinputChange}
          
        />

        <TextField
          name="description"
          margin="normal"
          fullWidth
          variant="outlined"
          placeholder="Description..."
          value={inputs.description}
          onChange={handleinputChange}
          
        />

        <Typography sx={{fontWeight:"bold", fontSize:"12"}}>
          Add Recipes steps:-
        </Typography>

        
          {
            recipeSteps.map((item,index)=>{
              return(
                <Box sx={{width:'100%',background:'greenyellow',display:'flex',justifyContent:'space-between',alignItems:'center',margin:'4px', padding:'4px', borderRadius:'4px', overflow:'hidden'} }>
                  <Box sx={{width:'90%'}} >
                    {item}
                  </Box>
                  <Button variant="contained" color='error' onClick={() => deleteItem(index)}  >
                    <BackspaceIcon/>
                  </Button>
                </Box>
              )
            })
          }
        
        
        <Textarea
          placeholder="Type in here…"
          minRows={3}
          sx={{
            "&::before": {
              display: "none",
            },
            "&:focus-within": {
              outline: "2px solid var(--Textarea-focusedHighlight)",
              outlineOffset: "2px",
            },
            marginTop:"7px"
          }}
          value={Step}
          onChange={(e) => setStep(e.target.value)}
        />

        <Button variant="contained" sx={{marginTop:"8px",marginBottom:'8px'}} onClick={addStep}>Add step</Button>
        
        <Typography sx={{fontWeight:"bold", fontSize:"12"}}>
          Type ingredients(should be comma seperated):-
        </Typography>
        
        <TextField
          name="ingredients"
          margin="normal"
          fullWidth
          variant="outlined"
          placeholder="Ingredients..."
          value={inputs.ingredients}
          onChange={handleinputChange}
        />

        <TextField
          name="time"
          margin="normal"
          fullWidth
          variant="outlined"
          placeholder="Cooking Time..."
          value={inputs.time}
          onChange={handleinputChange}
        />

        <TextField
          name="image"
          margin="normal"
          fullWidth
          variant="outlined"
          placeholder="Image URL..."
          value={inputs.image}
          onChange={handleinputChange}
        />

        <Button variant="contained" type="submit" sx={{width:"100%"}}>
          Add Recipe
        </Button>
      </form>
    </Box>
  );
};

export default AddRecipe;