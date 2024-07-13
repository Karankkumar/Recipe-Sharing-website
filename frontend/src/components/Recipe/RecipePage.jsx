import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'; // Correct import

const RecipePage = () => {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:5000/recipes/${id}`)
        .then((res) => setInputs(res.data.recipe));
    }

    fetchHandler();
  }, [id]);

  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return hours > 0
      ? `${hours} hr${hours > 1 ? 's' : ''} ${minutes} min`
      : `${minutes} min`;
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}>
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
          {inputs.name}
        </Typography>

        <Typography variant='h5' sx={{ textAlign: 'center', color: 'gray' }}>
          {inputs.description}
        </Typography>

        <Typography variant='body1' sx={{ textAlign: 'center' }}>
          Cooking Time: {formatTime(inputs.time)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          marginTop: '10px'
        }}
      >
        <img style={{ width: '650px', height: '450px' }} src={inputs.image} alt={inputs.name} />

        <Box sx={{ width: '650px', height: '650px' }}>
          <Typography variant='h5' sx={{ marginTop: '5px', marginBottom: '10px',fontWeight: 'bold', color: '#333' }}>Recipe Steps:</Typography>

          {inputs.recipeSteps && inputs.recipeSteps.map((step, index) => (
            <Typography key={index}><ArrowRightAltIcon sx={{color:'yellowgreen'}} /> {step}</Typography>
          ))}

          <Typography sx={{ marginTop: '15px',fontWeight: 'bold', color: '#333' }} variant='h5'>Ingredients:</Typography>

          {inputs.ingredients && inputs.ingredients.split(',').map((ingredient, index) => (
            <Typography key={index}><ArrowRightAltIcon sx={{color:'yellowgreen'}}/> {ingredient}</Typography>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default RecipePage;
