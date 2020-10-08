import React, { useState } from "react";
import "./VideoContainer.css";

import VideoPreview from "../videoPreview/VideoPreview";

/*

const numbers [1, 2, 3];
const added = numbers.map(value => value + 1);

console.log(added) --> [2, 3, 4]

* */

const VideoContainer = ({ title, videos }) => {
    const [currentVideo, setCurrentVideo] = useState(0);

    const handleCurrentVideo = id => {
        setCurrentVideo(id);
    };

    return (
        <div className="video-container">
            <h2>{title}</h2>
            { currentVideo !== 0 &&
                <p>Reproduciendo: { videos.find(video => video.id === currentVideo).title }</p>
            }
            <div className="video-container-list">
                {
                    videos
                        .map(video =>
                            <VideoPreview
                                id={video.id}
                                key={`video-${video.id}`}
                                img={video.img}
                                title={video.title}
                                selected={video.id === currentVideo}
                                onClick={handleCurrentVideo}
                            />)
                }
            </div>
        </div>
    )
}

VideoContainer.defaultProps = {
    title: '',
    videos: [],
};

export default VideoContainer;
