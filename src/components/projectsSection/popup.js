import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent } from "@mui/material";
import { styled } from '@mui/system';
import isMobile from 'ismobilejs';

import { splitText } from "../common/textFunctions";

const PopupBackground = styled('div', {
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

const StyledPopup = styled(Card, {
    shouldForwardProp: (props) => props !== 'selection'
})(
    ({ theme, selection }) => {
        const isHidden = !selection;
        return {
            position: "absolute",
            visibility: isHidden ? "hidden" : "visible",
            left: "50%",
            top: "45vh",
            transform: "translate(-50%, -50%)",
            minHeight: "30%",
            maxHeight: "80vh",
            width: "50%",
            display: "flex",
            flexDirection: "column",

            backgroundColor: theme.palette.background.card,

            border: "5px ridge",
            borderColor: theme.palette.primary.light,
    

            [theme.breakpoints.down('md')]: {
                width: "85vw",
            }
        }
    }
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
        margin: "0",
        flexGrow: 1,
        overflowY: "auto",

        backgroundColor: theme.palette.background.card,
        fontSize: theme.components.MuiCssBaseline.styleOverrides.p.fontSize,
    })
);

const StyledPopupFooter = styled(CardActions)(
    ({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.card,
        flexGrow: 0,
    })
);

const StyledLink = styled(Link)(
    ({ theme }) => ({
        fontSize: "30px",
        fontWeight: "400",

        "&:hover": {
            color: theme.palette.primary.contrastText,
        },
    })
);

function PopupSquare(props) {
    const FunctionalContent = props.selection?.fullContent;

    const disableMobile = props.selection?.disableOnMobile;
    const isMobileProject = isMobile(window.navigator).any;

    return (
        <>
            <PopupBackground {...props} />
            <StyledPopup
                variant="outlined"
                selection={props.selection}
            >
                <StyledPopupHeader>
                    {props.selection?.title}
                </StyledPopupHeader>
                <StyledPopupContent>
                    {FunctionalContent ?
                        <FunctionalContent />
                        : splitText(props.selection?.content)}
                </StyledPopupContent>
                {props.selection?.url ? (
                    <StyledPopupFooter>
                        {disableMobile && isMobileProject ? <p>Can't play on mobile</p> :
                            <StyledLink
                                to={`/projects/${props.selection.url}`}

                            >Play</StyledLink>
                        }
                    </StyledPopupFooter>
                ) : null}
            </StyledPopup>
        </>
    );
}

export default PopupSquare;