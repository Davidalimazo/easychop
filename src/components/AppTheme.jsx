import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material';

export const theme = createTheme({
  
})


export default function AppTheme({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
