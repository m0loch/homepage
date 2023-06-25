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

export default function Smith(props) {
    return (
        <RpgMenu {...props}>
            <Grid container>
                <Column>
                    <MenuButton onClick={() => alert('shop')}>
                        Shop
                    </MenuButton>
                </Column>
                <Column>
                    <MenuButton onClick={() => alert('shop')}>
                        Upgrade
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
