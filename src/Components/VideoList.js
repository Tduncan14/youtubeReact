import React from 'react';
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';


const VideoList = ({List,onVideoSelect}) =>{






    return(
       <>
       
        {
          List.map((video,id) =>(
            <Grid container spacing={10}>
            <VideoItem key={id} video={video} newVideo={onVideoSelect}>
           
            </VideoItem>

            </Grid>
          ))
        }
       
       </>
    )
}


export default VideoList;