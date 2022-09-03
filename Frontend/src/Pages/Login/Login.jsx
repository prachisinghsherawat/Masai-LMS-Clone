
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css"
import SimpleReactValidator from 'simple-react-validator';
import { useState } from 'react';



export const Login = () => {
  
    const simpleValidator = React.useRef(new SimpleReactValidator());
  
    const [loginData,setLoginData] = React.useState({

        email:'',
        password:'' 
    })

    const [,forceUpdate] = useState()



    const HandleChange = (e) => {

        const {name , value} = e.target;
        setLoginData({...loginData , [name]:value })
    }
    
    const HandleSubmit = () => {
    
        if(simpleValidator.current.allValid()){
          console.log("yes")
        }
        else{
          simpleValidator.current.showMessages()
          forceUpdate(1)
        }
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
            <TextField fullWidth id="fullWidth" name='email' onChange={HandleChange} />
            <span>{simpleValidator.current.message("email" , loginData?.email , "required")}</span>

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
            <TextField fullWidth id="fullWidth" name='password' onChange={HandleChange} />
            <span>{simpleValidator.current.message("password" , loginData?.password , "required")}</span>

        </Box>
       </div>

        <div>
    
            <Button onClick={HandleSubmit} className='btn' variant="contained">LOG IN</Button>

        </div>

    </div>

    </>

  );
}

