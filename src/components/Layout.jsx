import React from 'react'
import { styled } from '@mui/styles'
import { Box } from '@mui/system'
import Main from './Main'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const LayoutDiv = styled(Box)(({theme})=>({

}))

export default function Layout() {
  return (
    <LayoutDiv>
        <Navbar/>
        <Sidebar/>
        <Main/>
    </LayoutDiv>
  )
}
