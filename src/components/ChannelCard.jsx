import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../ultils/constants'

const ChannelCard = ({channelDetail, marginTopProps}) => {
  return (
    <Box sx={{boxShadow: 'none',  borderRadius: '20px', display: 'flex', justifyContent:'center', alignItems: 'center', width:'358px', margin:'auto', marginTop:marginTopProps}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center', color:'#fff'}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #e3e3e3', marginLeft: 'auto', marginRight: 'auto'}}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 14, color: '#85C88A', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard