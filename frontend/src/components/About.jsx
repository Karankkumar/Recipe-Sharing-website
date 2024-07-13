import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '16px', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our Recipe Website! We are passionate about sharing delicious and easy-to-make recipes with the world. Our mission is to inspire home cooks of all levels to create amazing dishes and enjoy the art of cooking.
      </Typography>
      
    </Container>
  );
};

export default About;
