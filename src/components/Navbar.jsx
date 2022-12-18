import React from 'react'
import { Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import { logo } from '../ultils/constants'
import SearchBar from './SearchBar'
import { fontSize } from '@mui/system'

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
      <Link to="/" style={{display: 'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        <Typography color="#3AB4F2" sx={{marginLeft: '10px', fontSize: {md: '1.5rem', xs: '0'}}} >Youtube Clone
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar