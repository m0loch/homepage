import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const BtnInternal = styled(Grid)(
    ({ theme }) => {

        return ({
            display: "flex",
            color: theme.palette.link,
            alignContent: "center",
            justifyContent: "center",
            height: 0,
            width: "46%",
            paddingBottom: "46%",
            margin: "2%"
        })
    }
);

function SimonButton(props) {

    let style = null;
    switch (props.value) {
        case 0:
            style = {
                borderTopLeftRadius: "100%",
                backgroundColor: "green",
            }
            break;
        case 1:
            style = {
                borderTopRightRadius: "100%",
                backgroundColor: "red",
            }
            break;
        case 2:
            style = {
                borderBottomLeftRadius: "100%",
                backgroundColor: "yellow",
            }
            break;
        case 3:
            style = {
                borderBottomRightRadius: "100%",
                backgroundColor: "blue",
            }
            break;

        default:
            return;
    }

    return (
        <BtnInternal item
            key={props.value}
            onClick={props.onClick}
            style={style}
        />
    )
}

export default SimonButton;