import React from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

const StyledRef = styled(Link)(
    () => ({
        fontSize: "medium",
        margin: "10px 0"
    })
);

function PostReference(props) {
    return (
        <StyledRef reloadDocument to={`/posts/${props.id}`}>
            #{props.id}
        </StyledRef>
    );
}

export default PostReference;