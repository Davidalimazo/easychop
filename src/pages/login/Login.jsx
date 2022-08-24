import React from 'react'
import { styled } from '@mui/styles'
import { Box } from '@mui/system'
import loginBg from '../../assets/images/login-bg.jpg' 
import avatar from '../../assets/images/avatar.png' 
import './login.css'
import { Button, TextField, Typography , Avatar, InputAdornment} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from 'react'
import { loginSchema } from './../../shema/loginSchema';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'


const LoginDiv = styled(Box)((props)=>({
  backgroundColor:'white',
  borderRadius:'10px',
  width:'50vw',
  height:'50vh'
}))


export default function Login() {

  const [showPassword,setShowPassword] = useState(false);

  
  const onSubmit=async(e)=>{
    console.log('submitted')
 }
 
   const {
     values,
     errors,
     handleBlur,
     handleChange,
     handleSubmit,
   } = useFormik({
     initialValues: {
       email: "",
       password: ""
     },
     validationSchema: loginSchema,
     onSubmit,
   });


  return (
    <div className="login">
      <div className="login-bg">
        <img src={loginBg} alt="" />
        <div className="login-bg-text" style={{color:'#000', fontSize:'28px', background:'#fff', padding:'10px', borderRadius:5, textTransform:'uppercase'}}>Easily quench your hunger</div>
      </div>
      <div className="login-form">
        <form className='lg-form' style={{backgroundColor:'white', width:'80%'}} onSubmit={handleSubmit}>
        <Typography variant='h2' component='div' sx={{fontSize:100}}><Avatar><PersonIcon /></Avatar></Typography>
        <Typography variant='h6' textTransform='uppercase'>login</Typography>
        <TextField label='Email' autoComplete='off' sx={{width:'70%'}} name='email' type='text' error={errors.email && true} helperText={errors.email} value={values.email} onChange={handleChange} fullWidth InputProps={{
          startAdornment:<InputAdornment position='start'><AccountCircleIcon/></InputAdornment>
        }}/>
        <TextField label='Password' name='password' autoComplete='off' sx={{width:'70%'}}  type={showPassword ? 'text' : 'password'} error={errors.password && true} helperText={errors.password} value={values.password} onChange={handleChange} fullWidth
        InputProps={{
          endAdornment:<InputAdornment position='end' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</InputAdornment>,
          startAdornment:<InputAdornment position='start'><PasswordIcon/></InputAdornment>
        }}
        />
        <Button type='submit' variant='contained' endIcon={<LoginIcon/>}>Login</Button>
        <Typography>Have an account? <Link style={{textTransform:'uppercase'}} to='/auth/register'>Register</Link></Typography>
        </form>
      </div>
    </div>
  )
}
