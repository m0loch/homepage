import React from "react";

import { styled } from '@mui/system';
import { Select, FormControl, ListItemIcon, MenuItem, FormHelperText } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const StyledItem = styled(MenuItem,
    { shouldForwardProp: (prop) => prop !== 'selected'},
)(
    ({ theme, selected }) => ({
        color: selected ? theme.palette.link : null,
    })
);

const isDone =(list, idx) => {
    return list.findIndex(level => level === idx) > -1;
}

function LevelSelect(props) {

    return (
        <FormControl style={{width: "100%"}}>
            <FormHelperText>Level select</FormHelperText>
            <Select
                onChange={e => props.onSelect(e.target.value)}
                style={{width: "100%"}}
                value={props.level}
            >
                {props.levelsList.map((item, idx) =>
                    <StyledItem
                        key={idx}
                        value={idx}
                        selected={idx === props.level}
                    >
                        {idx+1} - {item.columns}x{item.rows}

                        {isDone(props.doneLevels, idx) ? 
                        <ListItemIcon style={{justifyContent: "flex-end"}}>
                            <CheckIcon fontSize="small" />
                        </ListItemIcon>
                        : null}
                    </StyledItem>
                )}
            </Select>
        </FormControl>
    )
}

export default LevelSelect;
