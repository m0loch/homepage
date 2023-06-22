import React from 'react';

import { IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export default function CollapseHeader(props) {
    console.log(props);
    return (
        <div
            style={{ display: "flex", alignItems: "center" }}
            className={props.className}
        >
            <h4>{props.caption}</h4>
            <IconButton onClick={props.onClick}>
                {props.open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
        </div>
    );
}
