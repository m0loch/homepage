import React from 'react';
import { Card, Grid } from "@mui/material";
import { styled } from '@mui/system';
import BlockIcon from '@mui/icons-material/Block';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const StyledTileInternal = styled(Card)(
    ({ theme }) => {
        return ({
            display: "flex",
            backgroundColor: theme.palette.background.card,
            color: theme.palette.link,
            alignContent: "center",
            justifyContent: "center",
            height: "8vw",
            width: "8vw",
            margin: "auto",

            [theme.breakpoints.down('md')]: {
                width: "16vw",
                height: "16vw",
            },
        })
    }
);

/* MODIFIERS:
!   hole (no tyle should be painted)
0   tyle is off
1   tyle is on

.   standard tyle   (flips adjacent ones)
    (none)
*   power tyle      (flips also diagonal ones)
    NewReleasesIcon
$   diagonal tyle   (flips ALSO diagonally adjacent tyles)
    ZoomOutMapIcon
+   rook tyle       (flips every tyle on the same line and column)
    OpenWithIcon

X   frozen tyle     (can't be clicked)
    BlockIcon
*/

const iconStyle = { display: "block", width: "60%", height: "60%", margin: "auto" };

function StyledTile(props) {
    const value = props.value[0];
    let icon;
    switch (props.value[1]) {
        case '*':
            icon = <NewReleasesIcon style={iconStyle} />
            break;

        case '$':
            icon = <ZoomOutMapIcon style={iconStyle} />
            break;

        case '+':
            icon = <OpenWithIcon style={iconStyle} />
            break;

        case 'X':
            icon = <BlockIcon style={iconStyle} />
            break;

        default:
    }

    const style = {
        padding: "1vw",
        opacity: value === '!' ? 0 : 1,
        filter: `brightness(${value === "0" ? "50%" : "100%"})`
    };

    return (
        <Grid item
            key={props.value}
            xs={12 / props.columns} // ensures the proper amount of tyles / line
            style={style}
            onClick={props.onClick}
        >
            <StyledTileInternal>
                {icon}
            </StyledTileInternal>
        </Grid>
    )
}

export default StyledTile;