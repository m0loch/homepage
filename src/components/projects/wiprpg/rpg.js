import React, { useEffect, useCallback, useReducer, useRef } from 'react';
import { connect } from 'react-redux';
import { rpgSetPartyState } from "../../../redux/actions";

import * as PIXI from 'pixi.js';
import PixiContainer from '../common/pixiContainer';
import PixiCanvas from './components/pixiCanvas';
import { readInput } from './gameLogic/input';
import StateReducer from './gameLogic/stateMachine';
import MainMenu from './components/menus/mainMenu';
import Tavern from './components/menus/menuTavern';
import Church from './components/menus/menuChurch';
import Merchant from './components/menus/menuMerchant';
import Smith from './components/menus/menuSmith';

function Rpg(props) {
    const [state, dispatch] = useReducer(StateReducer, { state: 'PreLoad', ...props });

    const boardRef = useRef(null);

    const inputCallback = useCallback(ev => readInput(ev, state.state, dispatch), [state.state]);
    const onChurchEntered = useCallback(sender => dispatch({ type: 'EnterChurch', sender }), []);
    const onMerchantEntered = useCallback(sender => dispatch({ type: 'EnterMerchant', sender }), []);
    const onSmithEntered = useCallback(sender => dispatch({ type: 'EnterSmith', sender }), []);
    const onTavernEntered = useCallback(sender => dispatch({ type: 'EnterTavern', sender }), []);
    const onLeaveTown = useCallback(sender => dispatch({ type: 'LeaveTown', sender }), []);
    const onExitBuilding = useCallback(() => dispatch({ type: 'Exit' }), []);

    const onOpenMenu = useCallback(() => dispatch({ type: 'OpenMenu' }), []);
    const onExitMenu = useCallback(() => dispatch({ type: 'ExitMenu' }), []);

    useEffect(() => {
        PIXI.BaseTexture.defaultOptions.scaleMode = PIXI.SCALE_MODES.LINEAR;

        PIXI.Assets.add('town', `${props.assetsFolder}/town/village.png`);
        PIXI.Assets.add('orb', `${props.assetsFolder}/orb.png`)
        PIXI.Assets.load(['town', 'orb'])
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
        window.addEventListener("leaveTown", onLeaveTown);
        window.addEventListener("exit", onExitBuilding);

        window.addEventListener("openMenu", onOpenMenu);
        window.addEventListener("exitMenu", onExitMenu);

        return () => {
            window.removeEventListener("keydown", inputCallback);
            window.removeEventListener("enterChurch", onChurchEntered);
            window.removeEventListener("enterMerchant", onMerchantEntered);
            window.removeEventListener("enterSmith", onSmithEntered);
            window.removeEventListener("enterTavern", onTavernEntered);
            window.removeEventListener("leaveTown", onLeaveTown);
            window.removeEventListener("exit", onExitBuilding);

            window.removeEventListener("openMenu", onOpenMenu);
            window.removeEventListener("exitMenu", onExitMenu);
        }
    }, [inputCallback,
        onChurchEntered,
        onMerchantEntered,
        onSmithEntered,
        onTavernEntered,
        onLeaveTown,
        onExitBuilding,
        onOpenMenu,
        onExitMenu,
    ]);

    return (
        <PixiContainer>
            <MainMenu state={state} activeState='ShowMenu' />
            <Church state={state} activeState='Church' />
            <Merchant state={state} activeState='Merchant' />
            <Smith state={state} activeState='Smith' />
            <Tavern state={state} activeState='Tavern' />
            {state.state !== 'PreLoad' ? <PixiCanvas ref={boardRef} /> : null}
        </PixiContainer>
    );
}

function mapStateToProps(state) {
    return { ...state.rpg };
}

const mapDispatchToProps = {
    rpgSetPartyState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rpg);