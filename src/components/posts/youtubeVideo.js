import React from 'react';
import { styled } from '@mui/system';

const FullContainer =  styled('div')(
    ({ align }) => {
    return ({
        display: "flex",
        flexDirection: "column",
        float: align,
        marginLeft: align === 'center' ? "auto" : "25px",
        marginRight: align === 'center' ? "auto" : "25px",
        width: `${align ? 50 : 100}%`
    })
});

const DockArea = styled('div')(
    ({ short }) => {
    return ({
        position: "relative",
        width: short ? "56.25%" : "100%",
        height: 0,
        paddingBottom: short ? "100%" : "56.25%",
        alignSelf: "center",
    })
});

const CaptionArea = styled('div')({
    position: "relative",
    width: "100%",
});

const YTframe = styled('iframe')({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
});

const YouTubeVideo = ({ videoId, caption, align, short }) => {
    return (
        <FullContainer align={align}>
            <DockArea short={short ?? false}>
                <YTframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={caption ?? "Embedded video from YouTube"}
                />
            </DockArea>
            {caption ? 
                <CaptionArea align={align}>
                    <center>
                        <i>{caption}</i>
                        <br/>
                    </center>
                </CaptionArea>
            : null}
        </FullContainer>
    )
}

export default YouTubeVideo;