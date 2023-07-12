import React, { useState } from 'react';
import { Button } from "@mui/material";

import RpgMenu from '../abstract/menu';
import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import CharSheet from './main/charSheet';
import WipPanel from './main/wipPanel';

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

const StyledMenuButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'active'
})(
    ({ theme, active }) => ({
        margin: "8px",
        fontSize: "2vmin",
        width: "100%",
        color: active ? theme.palette.primary.contrast : theme.palette.primary.text,
    })
);

function MenuButtonInternal(props) {

    // Note: this is to avoid spreading setTab to the Button component, it would trigger a warning
    const { activeTab, setTab, ...rest } = props;

    return (
        <StyledMenuButton
            variant="contained"
            size="normal"
            onClick={props.setTab ? () => props.setTab(props.idx) : null }
            active={props.activeTab === props.idx}
            {...rest}
        >
            {props.children}
        </StyledMenuButton>
    );
}

export default function MainMenu(props) {
    const [tab, setTab] = useState(0);
    return (
        <RpgMenu {...props}>
            <Grid container style={{ height: "95%", flexWrap: "nowrap" }}>
                <NavColumn>
                    <MenuButtonInternal idx={0} activeTab={tab} setTab={setTab}>Status</MenuButtonInternal>
                    <br />
                    <MenuButtonInternal idx={1} activeTab={tab} setTab={setTab}>Item</MenuButtonInternal>
                    <MenuButtonInternal idx={2} activeTab={tab} setTab={setTab}>Magic</MenuButtonInternal>
                    <MenuButtonInternal idx={3} activeTab={tab} setTab={setTab}>Equip</MenuButtonInternal>
                    <MenuButtonInternal idx={4} activeTab={tab} setTab={setTab}>Order</MenuButtonInternal>
                    <br /><br />
                    <MenuButtonInternal idx={5} activeTab={tab} setTab={setTab}>Save/Load</MenuButtonInternal>
                    <MenuButtonInternal activeTab={tab}  onClick={() => window.dispatchEvent(new CustomEvent('exitMenu'))}>Close</MenuButtonInternal>
                </NavColumn>
                <Body>
                    {/* Status */}
                    {tab === 0 && props.state.party.map((char, idx) =>
                        <CharSheet
                            key={idx}
                            char={char}
                        />
                    )}

                    {/* Items */}
                    {tab === 1 && <WipPanel>Items</WipPanel>}

                    {/* Magic */}
                    {tab === 2 && <WipPanel>Magic</WipPanel>}

                    {/* Equip */}
                    {tab === 3 && <WipPanel>Equip</WipPanel>}

                    {/* Order */}
                    {tab === 4 && <WipPanel>Order</WipPanel>}

                    {/* Save */}
                    {tab === 5 && <WipPanel>Save/Load</WipPanel>}

                </Body>
            </Grid>
        </RpgMenu>
    );
}
