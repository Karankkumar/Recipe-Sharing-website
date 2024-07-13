import React from 'react';
import {AppBar, Toolbar, Typography, Tab, Tabs,Box} from "@mui/material";
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  const [value,setvalue] = useState(0);
  return (
    <div>
      <AppBar sx={{backgroundColor:'black'}} position='sticky'>
        <Toolbar>
          {/* <Typography variant='h4'>
            
            <Box>Recipe</Box>Finder
          </Typography> */}

          <Box sx={{display:'flex',alignItems:'center',fontWeight:'bold'}}>
            <RiceBowlIcon sx={{fontSize: 35,color: '#fff'}} />
            <Typography sx={{fontSize: 35,color: 'yellowgreen'}}>Recipe</Typography>
            <Typography sx={{fontSize: 35,color: '#fff'}}>Share</Typography>
          </Box>

          <Tabs 
            sx={{ml: "auto"}}
            textColor='inherit'
            indicatorColor='secondary'
            value = {value}
            onChange={(e,val)=>setvalue(val)}>
              <Tab LinkComponent={Link} to='/' label="Home" />
              <Tab LinkComponent={Link} to='/Recipes' label="Recipes" />
              <Tab LinkComponent={Link} to="/add" label="Add Recipe" />
              <Tab LinkComponent={Link} to="about" label="About us" />
          </Tabs>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
