import React from 'react';
import videoSource from '../../../../assets/video/test3.mp4';
import poster from '../../../../assets/img/frame-001.jpg';

const BackgroundVideo = () => {
    return (
        <div className="video-background">
            <video className="video-container" poster={poster} preload="none" playsInline autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
               Your browser does not suppot the video tag!
        </video>
        </div>
    );
};

export default BackgroundVideo;

