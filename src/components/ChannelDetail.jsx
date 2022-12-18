import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../ultils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(); // State to store the Channel

  const [videos, setVideos] = useState([]); // State to store the video lists

  const {id} = useParams(); // This is to access the :id parameter in the route URL
  
  useEffect(() => {
    // Call the API to get the current Channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => {      
      setChannelDetail(data.data.items[0]); // First channel in the array response
    });

    // Call the API to get videos of current Channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {      
      setVideos(data.data.items); // List of videos
    });
  },[id])
  return (
    <Box minHeight="95vh">

      <div style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
        }}/>

      <ChannelCard channelDetail={channelDetail} marginTopProps="-93px" />

      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail