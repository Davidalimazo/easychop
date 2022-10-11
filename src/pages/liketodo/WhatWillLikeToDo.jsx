import React from 'react'
import { Box, Button } from '@mui/material';
import wwltd_bg from '../../assets/images/wwltd_bg.png'

export default function WhatWillLikeToDo() {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', height:'100vh', flexDirection:'column'}} className='wwltd_con'>
      <h2>What will you like to do today</h2>
      <Box sx={{mt:'30px', display:'flex', gap:'1rem'}}>
        <Button variant='contained' className='wwltd_btn'>Order from store</Button>
        <Button variant='contained' className='wwltd_btn'>Request a delivery</Button>
      </Box>
      <style>
        {
            `.wwltd_con{
                background-image:url(${wwltd_bg});
                text-transform:uppercase;
            }
            .wwltd_btn{
                padding:25px;
            }
            `
        }
      </style>
    </Box>
  )
}
