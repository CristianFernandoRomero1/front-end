
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// ** create-user.component.js ** //
import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login(){

 
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
   function onSubmit(e) {
        e.preventDefault()
        const userObject = {
            usuario: usuario,
            password: password
        };
        axios.post('http://localhost:8000/api/userauth', userObject)
            .then((res) => {
                console.log(res.data);
                if(res.data.success === true){
                navigate('/holamundo');
                }
            }).catch((error) => {
                console.log(error)
            });
        //this.setState({ name: '', email: '' })
    }

   
      return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic_user" label="Usuario" variant="outlined"  onChange={(e)=>setUsuario(e.target.value)} />
          <TextField id="outlined-basic_password" label="Contrasena" variant="outlined"  onChange={(e)=>setPassword(e.target.value)}  />
          <Button variant="contained" onClick={onSubmit} value="Create User" >Iniciar sesion</Button>
        </Box>
       
        );
    
}