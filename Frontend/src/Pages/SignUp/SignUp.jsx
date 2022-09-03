import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SimpleReactValidator from 'simple-react-validator';
import "./SignUp.css"
import { useState } from 'react';



export const SignUp = () => {

  const simpleValidator = React.useRef(new SimpleReactValidator())

  const [signupData , setSignupData] = useState({

    name : "",
    username : "",
    email : "",
    password : ""

  })

  const [ ,forceUpdate] = useState()

  

  const HandleChange = (e) => {

    const {name , value} = e.target;
    setSignupData({...signupData , [name]:value })
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

    <div className="signBox">

        <div>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <label>Name</label>
            <TextField fullWidth id="fullWidth" name='name' onChange={HandleChange} />
            <span>{simpleValidator.current.message("name" , signupData?.name , "required")}</span>

          </Box>
        </div>

        <div>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <label>Username</label>
            <TextField fullWidth id="fullWidth" name='username' onChange={HandleChange} />
            <span>{simpleValidator.current.message("username" , signupData?.username , "required")}</span>

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
            <TextField fullWidth id="fullWidth" name='email' onChange={HandleChange} />
            <span>{simpleValidator.current.message("email" , signupData?.email , "required")}</span>

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
            <span>{simpleValidator.current.message("password" , signupData?.password , "required")}</span>

          </Box>
        </div>   

        <div>
    
          <Button onClick={HandleSubmit} className='btn' variant="contained">SIGN UP</Button>
            
        </div>

    </div>

    </>

  );
}
