import React from 'react'
import { styled } from '@mui/styles'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import './auth.css'

const AuthDiv = styled(Box)((props)=>({
  backgroundColor:'#9a7b4f',
  height:'100vh',
  width:'100%',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}))

export default function Auth() {
  return (
    <AuthDiv className='auth'>
      <Outlet/>
    </AuthDiv>
  )
}
