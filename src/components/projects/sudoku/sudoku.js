import React, { useState } from 'react';

import { Container } from "@mui/material";
import ControlBar from './components/controlBar';
import StyledTable from './styledComponents/styledTable';
import StyledSection from './styledComponents/styledSection';
import SelectionDlg from './components/selectionDlg';
import WinScreen from '../common/winScreen';

// THIS NEEDS TO BE MOVED AWAY
const EXAMPLE = [
  0,0,0,2,7,0,0,9,0,
  0,9,0,4,0,5,8,1,7,
  0,0,3,0,0,0,0,0,5,
  0,0,0,7,0,9,1,2,3,
  0,0,4,0,1,2,0,8,0,
  1,0,0,3,5,0,0,4,0,
  6,5,0,1,0,0,4,0,0,
  0,3,2,0,6,7,9,0,1,
  9,1,0,0,0,0,0,3,8,
];

// const EXAMPLE = [
//   1, 2, 3, 4, 5, 6,
//   4, 5, 6, 0, 1, 2,
//  11,12,13,34,35,36,
//  14,15,16, 0,31,32,
//  21,22,23,44,45,46,
//  24,25,26, 0,41,42,
// ]

const HDIM = 3; // sezioni per colonna
const VDIM = 3; // sezioni per riga

// The grid needs to be square, so it will always end up having
// a dimension of HDIM x VDIM for both height and width.
//
// A 2x3 grid will feature sections made of 3x2 tiles.

const loadSections = (source, vCount, hCount) => {
  const tiles = new Array(vCount * hCount);
  for (let a = 0; a < tiles.length; a++) tiles[a] = [];

  // Hypothesis: 2 3x2 sections per row, split on 3 tows
  // vCount = 2
  // hCount = 3
  let iterator = 0;
  for (let i = 0; i < hCount; i++) {
    // Cycle on the vertical number of sections
    for (let j = 0; j < vCount; j++) {
      // Cycle on the number of "section rows"
      for (let k = 0; k < hCount * vCount; k++) {
        // Cycle on actual columns
        tiles[i * vCount + Math.floor(k / hCount)]
          .push({ value: source[iterator] !== 0 ? source[iterator] : null, base: source[iterator] !== 0 });
        iterator++;
      }
    }
  }

  return tiles;
}

//////////////////////////////////////////////////

const NewGame = () => {
  return {
    tiles: loadSections(EXAMPLE, HDIM, VDIM),
    victory: false,
    dialogOpen: false,
    editingDigit: undefined,
    moves: [],
    erasing: false,
  }
}

function Sudoku(props) {
  const [gameState, setGameState] = useState(NewGame());

  // Events
  const onCellSelected = (e, section, idx) => {
    e.preventDefault();

    const row = (Math.floor(section / HDIM) * HDIM) + Math.floor(idx / VDIM);
    const col = ((section % HDIM) * VDIM) + (idx % VDIM);

    if (gameState.erasing) {
      const tiles = gameState.tiles;
      gameState.moves.push(JSON.stringify(tiles));
      tiles[section][idx].value = null;

      setGameState({
        ...gameState,
        erasing: false,
      });
      return;
    }

    setGameState({
        ...gameState,
        dialogOpen: {x: e.clientX, y: e.clientY},
        editingDigit: {
          sectionId: section,
          sectionIdx: idx,
          row,
          col,
        }
     });
  }

  const onNumberSelected = (value) => {
    const tiles = gameState.tiles;

    gameState.moves.push(JSON.stringify(tiles));

    tiles[gameState.editingDigit.sectionId][gameState.editingDigit.sectionIdx].value = value;

    setGameState({
        ...gameState,
        dialogOpen: false,
        editingDigit: undefined,
    })
  }

  const onNumberInsertCancel = () => {
      setGameState({
        ...gameState,
        dialogOpen: false,
        editingDigit: undefined
      });
  }

  const onUndo = () => {
    if (gameState.moves.length === 0) {
      return;
    }

    gameState.tiles = JSON.parse(gameState.moves.pop());

    setGameState({
      ...gameState,
    })
  }

  const onEraseNumber = () => {
    setGameState({
      ...gameState,
      erasing: !gameState.erasing,
    })
  }
  // /Events

  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <ControlBar
        reset={() => setGameState(NewGame())}
        undo={onUndo}
        erase={onEraseNumber}
        notes={() => alert('notes')}
        hint={() => alert('hint')}
        isErasing={gameState.erasing}
      />
      <SelectionDlg
        open={gameState.dialogOpen !== false}
        hCount={HDIM}
        vCount={VDIM}
        onSelect={onNumberSelected}
        onClose={onNumberInsertCancel}
        position={gameState.dialogOpen}
        selected={gameState.editingDigit}
      />
      <StyledTable container>
        {gameState.victory ? <WinScreen onClick={NewGame()} /> : null}
        {gameState.tiles.map((section, idx) => (
          <StyledSection
            key={idx}
            idx={idx}
            section={section}
            hCount={HDIM}
            vCount={VDIM}
            onCellSelected={onCellSelected}
          />
        ))}
      </StyledTable>
    </Container>
  );
}

export default Sudoku;