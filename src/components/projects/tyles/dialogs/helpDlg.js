import React from 'react';
import Tyle from '../components/tyle';
import { BaseDlgPanel, DlgBackground, DlgContent, DlgActions, ActionButton } from '../../common/baseDlg';

export default function HelpDlg(props) {
    return (
        <>
            <DlgBackground onClick={props.onOK} />
            <BaseDlgPanel animationspeed={.1}>
                <DlgContent>
                    <p>The objective of the game is to turn all the tiles on.</p>
                    <br />
                    <p>Each tile can be activated by clicking on it, but beware that changing its state will affect nearby tiles as well!</p>
                    <br />

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Tyle value={'1.'} columns={10} /> <p>Normal tiles will affect adjacent tiles up, down, left and right of them</p>
                    </div>

                    {
                        props.types.includes('*') ?
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Tyle value={'1*'} columns={10} /> <p>Power tiles will affect every tile around them</p>
                            </div> : null
                    }{
                        props.types.includes('$') ?
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Tyle value={'1$'} columns={10} /> <p>Cross tiles will affect the tiles they touch diagonally with their corners</p>
                            </div> : null
                    }{
                        props.types.includes('+') ?
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Tyle value={'1+'} columns={10} /> <p>Wave tiles will affect every tile on the same column and row</p>
                            </div> : null
                    }{
                        props.types.includes('X') ?
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Tyle value={'1X'} columns={10} /> <p>Blocked tiles just won't budge - you'll need to rely to other tiles to interact with them</p>
                            </div> : null
                    }
                </DlgContent>
                <DlgActions style={{ margin: "10px 0" }}>
                    <ActionButton onClick={props.onOK}>Close</ActionButton>
                </DlgActions>
            </BaseDlgPanel>
        </>
    );
}
