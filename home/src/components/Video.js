import React from 'react';
//import "../assets/video.mp4";
import ReactPlayer from 'react-player'
const VideoComponent=()=>{
    return(
        <div className="video">
            <ReactPlayer url={'https://youtube.com/shorts/kcAmEbx4COQ?feature=share'} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} />
        </div>
    );
};
export default VideoComponent;