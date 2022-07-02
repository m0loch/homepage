import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";
import { styled } from '@mui/system';
import React from "react";

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
    () => ({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        minHeight: "30%",
        minWidth: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    })
);

const StyledPopupHeader = styled(CardContent)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        fontSize: theme.components.MuiCssBaseline.styleOverrides.h2.fontSize,
    })
);

const StyledPopupContent = styled(CardContent)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light,
        fontSize: theme.components.MuiCssBaseline.styleOverrides.p.fontSize,
    })
);

const StyledPopupFooter = styled(CardActions)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light,
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
                    {props.selection?.content}
                </StyledPopupContent>
                <StyledPopupFooter>
                    <Link to={`/projects/${props.selection?.url}`}>Check it out</Link>
                </StyledPopupFooter>
            </StyledPopup>
        </StyledContainer>
    );
}

export default PopupSquare;