import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";
import { styled } from '@mui/system';
import React from "react";

import { splitText } from "../common/textFunctions";

const StyledContainer = styled('div', {
    shouldForwardProp: (props) => props !== 'selection'
})(
    ({ theme, selection }) => {
        const isHidden = !selection;
        return {
            position: "fixed",
            visibility: isHidden ? "hidden" : "visible",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflow: "hidden",
            backgroundColor: theme.palette.background.opaque,
        }
    }
);

const StyledPopup = styled(Card)(
    ({ theme }) => ({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        minHeight: "30%",
        maxHeight: "80vh",
        minWidth: "30%",
        display: "flex",
        flexDirection: "column",

        [theme.breakpoints.down('md')]: {
            minWidth: "80vw",
            width: "95vw",
        }
    })
);

const StyledPopupHeader = styled(CardContent)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        fontSize: theme.components.MuiCssBaseline.styleOverrides.h2.fontSize,
        flexGrow: 0,
    })
);

const StyledPopupContent = styled(CardContent)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        flexGrow: 1,
        overflowY: "auto",

        backgroundColor: theme.palette.primary.light,
        fontSize: theme.components.MuiCssBaseline.styleOverrides.p.fontSize,
    })
);

const StyledPopupFooter = styled(CardActions)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light,
        flexGrow: 0,
    })
);

function PopupSquare(props) {
    return (
        <StyledContainer {...props}>
            <StyledPopup variant="outlined">
                <StyledPopupHeader>
                    {props.selection?.title}
                </StyledPopupHeader>
                <StyledPopupContent>
                    {props.selection?.fullContent ?? splitText(props.selection?.content)}
                </StyledPopupContent>
                {props.selection?.url ? (
                    <StyledPopupFooter>
                        <Link to={`/projects/${props.selection.url}`}>Check it out</Link>
                    </StyledPopupFooter>
                ) : null}
            </StyledPopup>
        </StyledContainer>
    );
}

export default PopupSquare;