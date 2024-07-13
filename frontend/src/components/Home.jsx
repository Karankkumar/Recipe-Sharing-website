import React from "react";
import recipeImage from "../assets/websiteimage.jpeg";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{backgroundColor:'white', display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <Box sx={{width:'80%', position:'absolute', top:'50%', left:'10%', height:'200px', backgroundColor:'rgba(, 0, 0, 0.5)', margin:'auto', display: 'flex',flexDirection:'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Typography variant="h3" sx={{color:'green',fontWeight:'bold',textAlign:'center',}}>Welcome to My Recipe Website</Typography>
        <Button LinkComponent={Link} to={'/recipes'} sx={{width:'250px',border:'1px solid white',fontSize:'20px',fontWeight:'bold',color:'green'}}>Click Here</Button>
      </Box>
      <img
        style={{ width: "100%", marginBottom: "0px", height: '92vh' }}
        src={recipeImage}
        alt=""
      />

      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          padding: "16px 0",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <Typography
          variant="body1"
          color="textSecondary"
          
        >
          &copy;All rights reserved.
        </Typography>
        <Typography color="textSecondary">This website is Created by Karan of Nsut IT-2</Typography>
        <Box>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#3b5998" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#1da1f2" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#e1306c" }}
          >
            <Instagram />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
