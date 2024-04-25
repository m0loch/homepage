import React from 'react';
import { styled } from '@mui/system';

const DockArea = styled('div')({
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "56.25%",
});

const YTframe = styled('iframe')({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
});

const YouTubeVideo = ({ videoId, caption }) => {
    return (
        <>
        <DockArea>
            <YTframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </DockArea>
        {caption ? <center><i>{caption}</i><br/></center> : null}
        </>
    )
}

export default YouTubeVideo;