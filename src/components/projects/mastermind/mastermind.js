import React, { useCallback, useEffect, useState } from 'react';

import { Container } from "@mui/material";
import Board from './components/board';
import Row from './components/row';
import Orb from './components/orb';
import { GenerateCode } from './utils/utils';
import WinScreen from '../common/winScreen';

const Settings = [
    { tries: 9, colors: 6, digits: 4 },
    { tries: 12, colors: 8, digits: 6 },
];

const GenerateEmptyRow = (size) => {
    return Array.apply(0, { length: size }).map(() => undefined);
}

function MasterMind(props) {

    const [code, setCode] = useState();
    const [victory, setVictory] = useState(false);

    const settings = Settings[props.difficulty];

    const newGame = useCallback(() => {
        // generate new combination
        setCode(GenerateCode(settings.digits, settings.colors));

        if (victory) {
            setVictory(false);
        }
    }, [settings, victory]);

    useEffect(() => {
        newGame();
    }, [newGame]);

    const rows = Array.apply(0, { length: settings.tries })
        .map(() => GenerateEmptyRow(settings.digits));

    // TMP
    console.log(code);

    const onOrbClicked = (arg) => {
        console.log(arg);
    }

    return (
        <Container>
            <Board container>

                {victory ? <WinScreen onClick={newGame}></WinScreen> : null}
                {rows.map((row, x) => (
                    <Row key={x}>
                        {
                            (x === 0 && code ? code : row).map((tile, y) =>
                                <Orb
                                    key={y}
                                    value={tile}
                                    onClick={() => onOrbClicked(x * 10 + y)}
                                />
                            )
                        }
                    </Row>
                )
                )}
            </Board>
        </Container>
    );
};

export default MasterMind;