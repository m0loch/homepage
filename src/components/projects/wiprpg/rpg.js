import React, { useEffect, useCallback, useReducer, useRef } from 'react';
import { connect } from 'react-redux';
import {
    rpgSetPartyState,
    rpgSetLocation,
    rpgSetPlotState
} from "../../../redux/actions";

import * as PIXI from 'pixi.js';
import PixiContainer from '../common/pixiContainer';
import PixiCanvas from './components/pixiCanvas';
import { readInput } from './gameLogic/input';
import StateReducer from './gameLogic/stateMachine';
import LocationsManager from './data/locationsManager';
import MainMenu from './components/menus/mainMenu';
import Tavern from './components/menus/menuTavern';
import Church from './components/menus/menuChurch';
import Merchant from './components/menus/menuMerchant';
import Smith from './components/menus/menuSmith';
import NarrationDlg from './components/abstract/narrationDlg';

function Rpg(props) {
    const [state, dispatch] = useReducer(StateReducer, { state: 'PreLoad', ...props });

    const boardRef = useRef(null);

    const location = LocationsManager.getLocation(state.location, state.plotStep);

    const inputCallback = useCallback(ev => readInput(ev, state.state, dispatch), [state.state]);
    const onChurchEntered = useCallback(sender => dispatch({ type: 'EnterChurch', sender }), []);
    const onMerchantEntered = useCallback(sender => dispatch({ type: 'EnterMerchant', sender }), []);
    const onSmithEntered = useCallback(sender => dispatch({ type: 'EnterSmith', sender }), []);
    const onTavernEntered = useCallback(sender => dispatch({ type: 'EnterTavern', sender }), []);
    const onExitBuilding = useCallback(() => dispatch({ type: 'Exit' }), []);

    const onEnterTown = useCallback(sender => dispatch({ type: 'EnterTown', sender }), []);
    const onLeaveTown = useCallback(sender => dispatch({ type: 'LeaveTown', sender }), []);

    const onOpenMenu = useCallback(() => dispatch({ type: 'OpenMenu' }), []);
    const onExitMenu = useCallback(() => dispatch({ type: 'ExitMenu' }), []);

    useEffect(() => {
        PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.LINEAR;

        // Locations
        PIXI.Assets.add('worldmap', `${props.assetsFolder}/worldmap/baseregion.png`);
        PIXI.Assets.add('vekstad', `${props.assetsFolder}/town/village.png`);
        PIXI.Assets.add('banditsCamp', `${props.assetsFolder}/town/camp.jpg`);
        // Assets
        PIXI.Assets.add('orb', `${props.assetsFolder}/orb.png`)
        PIXI.Assets.load(['worldmap', 'vekstad', 'banditsCamp', 'orb'])
            .then(() => {
                dispatch({ type: 'Loaded' });
            });

        return () => PIXI.Assets.reset();
    }, [props])

    useEffect(() => {
        window.addEventListener("keydown", inputCallback);
        window.addEventListener("enterChurch", onChurchEntered);
        window.addEventListener("enterMerchant", onMerchantEntered);
        window.addEventListener("enterSmith", onSmithEntered);
        window.addEventListener("enterTavern", onTavernEntered);
        window.addEventListener("exit", onExitBuilding);

        window.addEventListener("enterLocation", onEnterTown);
        window.addEventListener("leaveTown", onLeaveTown);

        window.addEventListener("openMenu", onOpenMenu);
        window.addEventListener("exitMenu", onExitMenu);

        return () => {
            window.removeEventListener("keydown", inputCallback);
            window.removeEventListener("enterChurch", onChurchEntered);
            window.removeEventListener("enterMerchant", onMerchantEntered);
            window.removeEventListener("enterSmith", onSmithEntered);
            window.removeEventListener("enterTavern", onTavernEntered);
            window.removeEventListener("exit", onExitBuilding);

            window.removeEventListener("enterLocation", onEnterTown);
            window.removeEventListener("leaveTown", onLeaveTown);

            window.removeEventListener("openMenu", onOpenMenu);
            window.removeEventListener("exitMenu", onExitMenu);
        }
    }, [inputCallback,
        onChurchEntered,
        onMerchantEntered,
        onSmithEntered,
        onTavernEntered,
        onExitBuilding,
        onEnterTown,
        onLeaveTown,
        onOpenMenu,
        onExitMenu,
    ]);

    return (
        <PixiContainer>
            {/* Main menu */}
            <MainMenu state={state} activeState='ShowMenu' />

            {/* Locations */}
            <Church state={state} activeState='Church' />
            <Merchant state={state} activeState='Merchant' />
            <Smith state={state} activeState='Smith' />
            <Tavern state={state} activeState='Tavern' />

            {/* Dialogues */}
            <NarrationDlg
                state={state}
                locData={location}
            />

            {/* Canvas */}
            {state.state !== 'PreLoad' &&
                <PixiCanvas
                    ref={boardRef}
                    location={location}
                />}
        </PixiContainer>
    );
}

function mapStateToProps(state) {
    return { ...state.rpg };
}

const mapDispatchToProps = {
    rpgSetPartyState,
    rpgSetLocation,
    rpgSetPlotState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rpg);