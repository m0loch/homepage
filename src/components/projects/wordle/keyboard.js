import './css/colors.css';
import './css/keyboard.css';

import React, { useCallback } from 'react';
import { Container, Card } from "@mui/material";
import Status from './status';

const rows = [
    ["Q","W","E","R","T","Y","U","I","O","P",],
    ["A","S","D","F","G","H","J","K","L",],
    ["↵","Z","X","C","V","B","N","M","←",]
]

function Keyboard(props) {
    const handleClick = useCallback((value) => {
        switch(value) {
            case '↵':
                props.inputCallback("ENTER");
                break;
            case '←':
                props.inputCallback("BACKSPACE");
                break;
            default:
                props.inputCallback(value);
        }
    }, [props]);

    return (
        <Container className="keyboard">
            {rows.map((row, idx) => {
                return (<div className="row" key={idx}>
                    {row.map((letter, idx) => {
                        let keyStyle = "";
                        if (letter in props.hints) {
                            switch (props.hints[letter]) {
                                case Status.Correct:
                                    keyStyle = "correct";
                                    break;

                                case Status.Misplaced:
                                    keyStyle = "misplaced";
                                    break;

                                case Status.Wrong:
                                    keyStyle = "wrong";
                                    break;

                                default:
                                    break;
                            }
                        }
                        return (
                            <Card className={`button ${keyStyle}`}
                                key={idx}
                                onClick={() => handleClick(letter)}
                            >
                                {letter}
                            </Card>)
                    })}
                </div>)
            })}
        </Container>
    );
}

export default Keyboard;