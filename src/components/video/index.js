
import React from 'react';
import './style.css'
import '../../bootstrap.min.css'


const Video = () => (
    <div className="video">
       <iframe title="video" width="1200" height="400" src="https://www.youtube.com/embed/TZZfuZ7SUcE"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" ></iframe>
    </div>
);

export default Video;