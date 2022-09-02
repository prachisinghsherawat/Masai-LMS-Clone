
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Login.css"
import SimpleReactValidator from 'simple-react-validator';



export const Login = () => {
  
    // const simpleValidator = React.useRef(SimpleReactValidator());

    
    const [loginData,setLoginData] = React.useState({
        email:'',
        password:'' 
    })

    const handleLoginCredentials = (e)=>{
        const {name,value} = e.target;
        setLoginData({...loginData , [name] : value})
    }




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
            <label>Password</label>
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

