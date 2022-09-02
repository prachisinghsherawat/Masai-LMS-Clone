
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Login.css"



export const Login = () => {

  return (

    <>

    <div className="loginBox">

        <Box
            sx={{
               width: 400,
               maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="fullWidth" id="fullWidth" />

        </Box>

    </div>

    </>

  );
}
