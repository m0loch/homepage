import React from 'react';
import { Button } from "@mui/material";

import RpgMenu from '../abstract/menu';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';

function NavColumn(props) {
    return (
        <Grid
            container
            direction='column'
            item xs={2}
            style={{ height: '100%' }}
        >
            {props.children}
        </Grid>
    );
}

function MainColumn(props) {
    return (
        <Grid container item xs={10} style={{ height: '100%' }}>
            {props.children}
        </Grid>
    );
}

const StyledMenuButton = styled(Button)(
    () => ({
        margin: "8px auto",
        fontSize: "2vmin",
    })
);

export function MenuButton(props) {
    return (
        <Grid item>
            <StyledMenuButton
                variant="outlined"
                size="normal"
                {...props}
            >
                {props.children}
            </StyledMenuButton>
        </Grid>
    );
}

function CharTiles(props) {
    return (
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', height: '50%' }}>
            {props.children}
        </Grid>
    );
}

export default function MainMenu(props) {
    return (
        <RpgMenu {...props}>
            <Grid container style={{ height: "100%"}}>
                <NavColumn>
                    <StyledMenuButton>Item</StyledMenuButton>
                    <StyledMenuButton>Magic</StyledMenuButton>
                    <StyledMenuButton>Equip</StyledMenuButton>
                    <StyledMenuButton>Stats</StyledMenuButton>
                    <StyledMenuButton>Save/Load</StyledMenuButton>
                    <br /><br />
                    <StyledMenuButton>Close</StyledMenuButton>
                </NavColumn>
                <MainColumn>
                    <CharTiles>
                        CHAR1
                    </CharTiles>
                    <CharTiles>
                        CHAR2
                    </CharTiles>
                    <CharTiles>
                        CHAR3
                    </CharTiles>
                    <CharTiles>
                        CHAR4
                    </CharTiles>
                </MainColumn>
            </Grid>
        </RpgMenu>
    );
}
