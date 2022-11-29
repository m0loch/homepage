import React from 'react';
import { styled } from '@mui/system';
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";

const StyledForm = styled('form')(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        padding: "1vw 0 .5vw",
    })
);

const StyledChoice = styled(FormControlLabel)(
    ({ theme }) => ({
        margin: "0",

        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    })
);

const StyledInput = styled(Radio)(
    () => ({
        margin: "0 1rem",
    })
);

function ChoicesArea(props) {

    return (
        <StyledForm>
            <RadioGroup
                value={props.selected}
                name="mode-select"
                onChange={ev => props.setSelected(ev.target.value)}
                style={{ width: "100%" }}
            >
                {props.children.map((item, idx) =>
                    <StyledChoice key={idx} value={idx} control={<StyledInput />} label={item.text} />
                )}
            </RadioGroup>
        </StyledForm>
    );
}

export default ChoicesArea;