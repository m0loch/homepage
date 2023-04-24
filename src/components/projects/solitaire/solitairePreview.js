import React, { useState } from "react";

import { Collapse } from "@mui/material";
import CollapseHeader from '../common/collapseHeader';
import { splitText } from "../../common/textFunctions";

function SolitairePreview(props) {

    const [open, setOpen] = useState([true, false, true, false]);

    const handleStateChange = (idx) => {
        const newState = [...open];
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    return (
        <div style={{ display: "inline-block" }}>
            <CollapseHeader
                caption={"Info"}
                open={open[0]}
                onClick={() => handleStateChange(0)}
            />
            <Collapse in={open[0]} timeout="auto" unmountOnExit>
                {splitText(`
                    Popularized by the early versions of Microsoft Windows, the game commonly known as <i>Solitaire</i> dates back to the end of the 19th century and is commonly known as <i>Klondike</i> or <i>Canfield</i>.

                    The aim of the game is to re-arrange the whole deck (52 cards with no jokers) into the the four piles on the top right - one for every suit, from the Aces to the Kings.

                    In the main playing area the player is allowed to move cards around and attach them in order to have sequence starting from the highest values (starting from Kings) downwards, with said values being adjacent (no skips: for example you can attach only cards valued 6 to 7s) and of alternating colours (the 3 of Hearts can only be used to attach the 2 of Spades or the 2 of Clubs).

                    You can of course move around stacks of cards as long as they fulfill the basic requirements.

                    In order to reveal covered cards, you'll need to move every revealed card at the bottom.

                    Only kings can be moved to open columns.

                    If you run out of options (or, well, just choose to do so...) you can reveal cards from the rest of the deck on the top left - the top card of the discard pile can be used in other zones, as long as it is a legal move.

                    Once the deck is empty, you can flip the discard pile in it and start over - provided you still have a discard pile...
                `)}
            </Collapse>
            <CollapseHeader
                caption={"Realization"}
                open={open[1]}
                onClick={() => handleStateChange(1)}
            />
            <Collapse in={open[1]} timeout="auto" unmountOnExit>
                {splitText(`
                    The game uses a plain <a href="https://pixijs.com/">PIXI.js</a> component.
                    Animations are done via <a href="https://www.npmjs.com/package/@tweenjs/tween.js">@tweenjs/tween.js</a>.

                    The cards pack has been retrieved from the internet (see Credits).
                `)}
            </Collapse>
            {/* <CollapseHeader
                caption={"Settings"}
                open={open[2]}
                onClick={() => handleStateChange(2)}
            />
            <Collapse in={open[2]} timeout="auto" unmountOnExit>
                <p><i>Placeholder for settings</i></p>
            </Collapse> */}
            <CollapseHeader
                caption={"Credits"}
                open={open[3]}
                onClick={() => handleStateChange(3)}
            />
            <Collapse in={open[3]} timeout="auto" unmountOnExit>
                <p>Card assets taken from  <a href="https://yaomon.itch.io/playing-cards">itch.io</a></p>
                <p>Credits to <a href="https://twitter.com/YaomonKS">Yaomon</a></p>
            </Collapse>
        </div>
    );
}

export default SolitairePreview;
