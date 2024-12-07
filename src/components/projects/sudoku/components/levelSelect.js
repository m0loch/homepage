import React from "react";

import { Select, FormControl, MenuItem, FormHelperText } from "@mui/material";

function LevelSelect(props) {

    const options = [...Array(props.levelsNumber).keys()].map(item => item);

    return (
        <FormControl style={{width: "100%"}}>
            <FormHelperText>Level select</FormHelperText>
            <Select
                onChange={e => props.onSelect(e.target.value)}
                style={{width: "100%"}}
                value={props.level}
            >
                {options.map(item =>
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default LevelSelect;
