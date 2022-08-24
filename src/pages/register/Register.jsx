import React from 'react'
import { styled } from '@mui/styles'
import { Box, MenuItem, Stack } from '@mui/material'
import regBg from '../../assets/images/reg-bg.jpg' 
import avatar from '../../assets/images/avatar.png' 
import './register.css'
import { Button, TextField, Typography , Avatar, InputAdornment} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from 'react'
import { registerSchema } from './../../shema/registerSchema';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'


const LoginDiv = styled(Box)((props)=>({
  backgroundColor:'white',
  borderRadius:'10px',
  width:'50vw',
  height:'50vh'
}))


export default function Register() {

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
       firstName: "",
       lastName: "",
       address: "",
       password: "",
       email:'',
       role:'',
       image:''
     },
     validationSchema: registerSchema,
     onSubmit,
   });


  return (
    <Stack direction='row'>
      <Box sx={{width:'40vw', height:'100vh', xs:{height:'100%'}, overflow:'hidden', xs:{display:'none'}}} className='rg_img'>
        <img src={regBg} alt='' style={{objectFit:'cover', width:'100%', height:'100vh'}}/>
      </Box>
      <Box sx={{background:'white', width:'60vw', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}} className='form_con'>
        <form onSubmit={handleSubmit}>
        <Typography variant='h6' textTransform='uppercase' textAlign='center'>Register</Typography>
          <Stack direction='row' spacing={2} sx={{mt:5, mx:6}} className='rg_md'>
          <TextField label='First Name' className='rg_input' sx={{xs:{width:'100%', mb:'20px'}}} autoComplete='off' name='firstName' type='text' error={errors.firstName && true} helperText={errors.firstName} value={values.firstName} onChange={handleChange} fullWidth InputProps={{
            startAdornment:<InputAdornment position='start'><AccountCircleIcon/></InputAdornment>
          }}/>
          <TextField label='Last Name' className='rg_input' autoComplete='off' name='lastName' type='text' error={errors.lastName && true} helperText={errors.lastName} value={values.lastName} onChange={handleChange} fullWidth InputProps={{
            startAdornment:<InputAdornment position='start'><AccountCircleIcon/></InputAdornment>
          }}/>
          </Stack>
          <Stack direction='row' spacing={2} sx={{mt:5, mx:6}} className='rg_md'>
          <TextField label='Email' className='rg_input' autoComplete='off' sx={{width:'70%'}} name='email' type='text' error={errors.email && true} helperText={errors.email} value={values.email} onChange={handleChange} fullWidth InputProps={{
            startAdornment:<InputAdornment position='start'><EmailIcon/></InputAdornment>
          }}/>
          <TextField type='text' label='Role' className='rg_input' name='role' sx={{width:'70%'}} placeholder='Your role' select value={values.role} onChange={handleChange} fullWidth variant='outlined' error={errors.role && true} helperText={errors.role} InputProps={{
            startAdornment:<InputAdornment position='start'><AccountTreeIcon/></InputAdornment>
          }}>
            <MenuItem value='customer'>Customer</MenuItem>
            <MenuItem value='vendor'>Vendor</MenuItem>
            <MenuItem value='delivery agent'>Delivery agent</MenuItem>
          </TextField>
          </Stack>
          <Stack direction='row' spacing={2} sx={{mt:5, mx:6}} className='rg_md'>
          <TextField label='Password' name='password' className='rg_input' autoComplete='off' sx={{width:'70%'}}  type={showPassword ? 'text' : 'password'} error={errors.password && true} helperText={errors.password} value={values.password} onChange={handleChange} fullWidth
          InputProps={{
            endAdornment:<InputAdornment position='end' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</InputAdornment>,
            startAdornment:<InputAdornment position='start'><PasswordIcon/></InputAdornment>
          }}
          />
          <TextField label='Profile image' className='rg_input' autoComplete='off' sx={{width:'70%'}} name='image' type='file' value={values.image} onChange={handleChange} fullWidth InputProps={{
            startAdornment:<InputAdornment position='start'><AccountCircleIcon/></InputAdornment>
          }}/>
          </Stack>
          <Stack sx={{mt:5, mx:6}}>
          <TextField label='Address' className='rg_input' multiline rows={2} autoComplete='off' name='address' type='text' error={errors.address && true} helperText={errors.address} value={values.address} onChange={handleChange} fullWidth InputProps={{
            startAdornment:<InputAdornment position='start'><LocationOnIcon color='error'/></InputAdornment>
          }}/>
          </Stack>
          <Stack sx={{mt:5, mx:6}}>
          <Button type='submit' variant='contained' endIcon={<LoginIcon/>}>Login</Button>
          </Stack>
          <Stack sx={{mt:5, mx:6}}>
            <Typography textAlign='center'>Have an account? <Link style={{textTransform:'uppercase', textDecoration:'underline'}} to='/auth'>Login</Link></Typography>
          </Stack>
        </form>
      </Box>
    </Stack>
  )
}
