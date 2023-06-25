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

export default function Church(props) {
    return (
        <RpgMenu {...props}>
            <Grid container>
                <Column>
                    <MenuButton onClick={() => window.dispatchEvent(new CustomEvent('prayer'))}>
                        Pray
                    </MenuButton>
                </Column>
                <Column>
                    <MenuButton onClick={() => window.dispatchEvent(new CustomEvent('revive'))}>
                        Revive
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
