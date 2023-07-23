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

export default function Church(props) {
    return (
        <MenuDlg {...props}>
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
        </MenuDlg>
    );
}
