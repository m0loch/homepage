import React from 'react';
import RpgMenu, { MenuButton } from '../abstract/menu';
import { Grid } from "@mui/material";

function Column(props) {
    return (
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
            {props.children}
        </Grid>
    );
}

export default function Tavern(props) {
    return (
        <RpgMenu {...props}>
            <Grid container>
                <Column>
                    <MenuButton onClick={() => alert('blabla')}>
                        Rumour
                    </MenuButton>
                </Column>
                <Column>
                    <MenuButton onClick={() => window.dispatchEvent(new CustomEvent('rest'))}>
                        Rest
                    </MenuButton>
                </Column>
                <Column>
                    <MenuButton onClick={() => window.dispatchEvent(new CustomEvent('exit'))}>
                        Leave
                    </MenuButton>
                </Column>
            </Grid>
        </RpgMenu>
    );
}
