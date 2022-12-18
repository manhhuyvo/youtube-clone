import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../ultils/constants'

/* We can also code as below: */
/* 
  const VideoCard = ({video}) => {
    console.log(video.id.videoId, video.snippet)
  }
*/
const VideoCard = ({video: {id: {videoId}, snippet}}) => {

  return (
    <card sx={{width: {md:'320px', xs:'100%'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: 358, height: 180}}
        />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px', maxWidth:'358px', boxSizing: 'border-box'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight='bold' color='grey'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'grey', ml: '4px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </card>
  )
}

export default VideoCard