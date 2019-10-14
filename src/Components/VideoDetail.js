import React from 'react';
import {Paper,Typography} from '@material-ui/core'

const VideoDetail = ({Video}) =>{

      if(!Video) return <div>Loading</div>

      console.log(Video.id.videoId)

       const videoSrc = `https://www.youtube.com/embed/${Video.id.videoId}`



    return(
    <>
    <Paper elevation={6} style={{height:'70%'}}>
      <iframe frameBorder="0" height="100%" width="100%" title="Player" src={videoSrc}>

      </iframe>
    </Paper>


    <Paper elevation={6} style={{padding:'50px'}}>
        <Typography variant="h4">
          {Video.snippet.title}
        </Typography>
        <Typography variant="subtitle1">
           {Video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {Video.snippet.description}
        </Typography>
    </Paper>
   </>
    )



}

export default VideoDetail;