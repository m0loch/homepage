import React from 'react';
import { Card, Grid } from "@mui/material";
import { styled } from '@mui/system';
import BlockIcon from '@mui/icons-material/Block';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const StyledTileInternal = styled(Card)(
    ({ theme, columns }) => {
        return ({
            display: "flex",
            backgroundColor: theme.palette.background.card,
            color: theme.palette.link,
            alignContent: "center",
            justifyContent: "center",
            width: `${Math.floor((columns > 2 ? 40 : 24) / columns) - 2}vw`,
            height: `${Math.floor((columns > 2 ? 40 : 24) / columns) - 2}vw`,

            [theme.breakpoints.down('md')]: {
                width: `${Math.floor(80 / (columns)) - 4}vw`,
                height: `${Math.floor(80 / (columns)) - 4}vw`,
            },
        })
    }
);

const GridInternal = styled(Grid)(
    ({theme, value }) => ({
        padding: "1vw",
        opacity: value === '!' ? 0 : 1,
        filter: `brightness(${value === "0" ? "50%" : "100%"})`,
        [theme.breakpoints.down('md')]: {
            padding: "2vw",
        },
    })
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

    return (
        <GridInternal item
            key={props.value}
            xs={12 / props.columns} // ensures the proper amount of tyles / line
            onClick={props.onClick}
            value={value}
        >
            <StyledTileInternal className={
                `${props.transition?.idx === props.idx ? `transition${props.transition.dir}` : ""}`
            }
            columns={props.columns}
            >
                {icon}
            </StyledTileInternal>
        </GridInternal>
    )
}

export default StyledTile;