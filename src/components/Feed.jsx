import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar, Videos} from './'
import { fetchFromAPI } from '../ultils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((responseData) => {
      setVideos(responseData.data.items);
    })
  }, [selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:"column", md:"row"}}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px:{sx: 0, md: 2}}}>
        <Sidebar 
          currentCategory={selectedCategory}
          setCurrentCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color:'#fff'}}>
          Copyright 2022 Manh Huy Youtube Clone Version
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#3AB4F2'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed