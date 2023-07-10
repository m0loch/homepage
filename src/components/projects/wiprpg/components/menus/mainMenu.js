import React from 'react';
import { Button } from "@mui/material";

import RpgMenu from '../abstract/menu';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import CharSheet from './main/charSheet';

function NavColumn(props) {
    return (
        <Grid
            container
            direction='column'
            style={{ flexBasis: 'content', height: '100%', marginRight: '8px' }}
        >
            {props.children}
        </Grid>
    );
}

function Body(props) {
    return (
        <Grid container style={{ height: '100%' }}>
            {props.children}
        </Grid>
    );
}

const StyledMenuButton = styled(Button)(
    () => ({
        margin: "8px",
        fontSize: "2vmin",
        width: "100%"
    })
);

function MenuButtonInternal(props) {
    return (
        <StyledMenuButton
            variant="contained"
            size="normal"
            {...props}
        >
            {props.children}
        </StyledMenuButton>
    );
}

export default function MainMenu(props) {
    return (
        <RpgMenu {...props}>
            <Grid container style={{ height: "95%", flexWrap: "nowrap" }}>
                <NavColumn>
                    <MenuButtonInternal>Item</MenuButtonInternal>
                    <MenuButtonInternal>Magic</MenuButtonInternal>
                    <MenuButtonInternal>Equip</MenuButtonInternal>
                    <MenuButtonInternal>Order</MenuButtonInternal>
                    <br /><br />
                    <MenuButtonInternal>Save/Load</MenuButtonInternal>
                    <MenuButtonInternal>Close</MenuButtonInternal>
                </NavColumn>
                <Body>
                    {props.state.party.map((char, idx) =>
                        <CharSheet
                            key={idx}
                            char={char}
                        />
                    )}
                </Body>
            </Grid>
        </RpgMenu>
    );
}
