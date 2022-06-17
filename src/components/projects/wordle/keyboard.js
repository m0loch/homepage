import React, { useCallback } from 'react';
import WordleKeyboard from './styledComponents/wordleKeyboard';
import WordleKbRow from './styledComponents/wordleKbRow';
import WordleKbKey from './styledComponents/wordleKbKey';
import WordleKbSpacer from './styledComponents/wordleKbSpacer';

const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",],
    [null, "A", "S", "D", "F", "G", "H", "J", "K", "L", null,],
    ["↵", "Z", "X", "C", "V", "B", "N", "M", "←",]
]

function Keyboard(props) {
    const handleClick = useCallback((value) => {
        switch (value) {
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
        <WordleKeyboard>
            {rows.map((row, idx) => (
                <WordleKbRow key={idx}>
                    {row.map((letter, idx) => letter ? (
                        <WordleKbKey
                            key={idx}
                            keyStyle={props.hints[letter]}
                            value={letter}
                            onClick={() => handleClick(letter)}
                        />
                    ) : (
                        <WordleKbSpacer key={idx}/>
                    )
                    )}
                </WordleKbRow>
            )
            )}
        </WordleKeyboard>
    );
}

export default Keyboard;