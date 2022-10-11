import React from 'react'
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

export default function SelectStoreType() {
    const [selected, setSelected] = React.useState('food');

    //single select
    const handleSelected=(e)=>{
        setSelected(e.target.value)
    }

  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', height:'100vh', flexDirection:'column', textAlign:'center'}} className='wwltd_con'>
        <Box sx={{width:{xs:'70vw', sm:'30vw'}}}>

            <Typography variant='h5'>Select Store Type</Typography>
      
      <TextField type='text' placeholder='Your vendor' sx={{ mt:'30px'}} select SelectProps={{multiple:false}} value={selected} onChange={handleSelected} fullWidth variant='outlined' error={false}>
            <MenuItem value='food'>Food</MenuItem>
            <MenuItem value='electronics'>Electronics</MenuItem>
            <MenuItem value='fashion'>Fashion</MenuItem>
  </TextField>
  </Box>
      <style>
        {
            `.wwltd_con{
                
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
