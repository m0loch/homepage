import React, { forwardRef } from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const calcAnimation = (color) => {
    return {
        "50%": {
            filter: "brightness(150%)",
            boxShadow: `0px 0px 15px 5px ${color}`,
        },
    }
}

const getColor = (key) => {
    switch (key) {
        case 0:
            return "rgb(0, 196, 0)";
        case 1:
            return "rgb(196, 0, 0)";
        case 2:
            return "rgb(196, 196, 0)";
        case 3:
            return "rgb(0, 0, 196)";

        default:
            return "black";
    }
}

const BtnInternal = styled(Grid)(
    ({ theme, idx }) => {
        const retVal = {
            display: "flex",
            color: theme.palette.link,
            alignContent: "center",
            justifyContent: "center",
            height: 0,
            width: "46%",
            paddingBottom: "46%",
            margin: "2%",
            background: getColor(idx),
        };
        retVal[`@keyframes lightup${idx}`] = calcAnimation(getColor(idx ));

        return retVal;
    }
);

const SimonButton = forwardRef((props, ref) => {

    let style = null;
    switch (props.value) {
        case 0:
            style = { borderTopLeftRadius: "100%" };
            break;
        case 1:
            style = { borderTopRightRadius: "100%" };
            break;
        case 2:
            style = { borderBottomLeftRadius: "100%" };
            break;
        case 3:
            style = { borderBottomRightRadius: "100%" };
            break;

        default:
            return;
    }

    return (
        <BtnInternal item
            idx={props.value}
            onClick={props.onClick}
            style={style}
            ref={ref}
        />
    )
});

export default SimonButton;