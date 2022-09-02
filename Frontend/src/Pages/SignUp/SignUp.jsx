import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css"



export const SignUp = () => {

  return (

    <>

    <div className="loginBox">

       <div>
          <Box
            sx={{
               width: 500,
               maxWidth: '100%',
            }}
          >
            <label>Email</label>
            <TextField fullWidth id="fullWidth" />

          </Box>
       </div>

       <div>
          <Box
            sx={{
               width: 500,
               maxWidth: '100%',
            }}
          >
            <label>Email</label>
            <TextField fullWidth id="fullWidth" />

          </Box>
       </div>

       <div>
          <Box
            sx={{
               width: 500,
               maxWidth: '100%',
            }}
          >
            <label>Email</label>
            <TextField fullWidth id="fullWidth" />

          </Box>
       </div>

       <div>
          <Box
            sx={{
               width: 500,
               maxWidth: '100%',
            }}
          >
            <label>Email</label>
            <TextField fullWidth id="fullWidth" />

          </Box>
       </div>

       

        <div>
    
          <Button className='btn' variant="contained">LOG IN</Button>
            
        </div>

    </div>

    </>

  );
}
