import React from 'react';
import MenuDlg from '../abstract/menuDlg';
import MenuButton from '../abstract/menuButton';
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
        <MenuDlg {...props}>
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
        </MenuDlg>
    );
}
