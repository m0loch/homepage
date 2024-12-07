import React, { useEffect, useState } from 'react';
import { CloneArray } from '../../common/arrayUtils';

import { Container } from "@mui/material";
import ControlBar from './components/controlBar';
import StyledTable from './styledComponents/styledTable';
import StyledSection from './styledComponents/styledSection';
import SelectionDlg from './components/selectionDlg';
import NotationDlg from './components/notationDlg';
import WinScreen from '../common/winScreen';

import LevelLoader from './utils/levelLoader';

const NewGame = (level) => {
  return {
    tiles: CloneArray(level.tiles),
    notes: CloneArray(level.notes),
    victory: false,
    dialogOpen: false,
    editingDigit: undefined,
    moves: [],
    selecting: false,
    erasing: false,
    notating: false,
  }
}

function Sudoku(props) {
  const [level, setLevel] = useState({ });
  const [gameState, setGameState] = useState(NewGame(level));

  useEffect(() => {
    LevelLoader(props.rows, props.columns, props.values, setLevel);
  }, [props.rows, props.columns, props.values, props.level]);

  useEffect(() => {
    // Used like this in order to avoid gameState to be a dependency
    // (it would lead to a recursive call)
    setGameState(gstate => {
        return {
        ...gstate,
        ...level
      }
    })
  }, [level]);

  // !!! Wait for level to be loaded
  if (!level.cols) return null;

  // Events
  const onCellSelected = (e, section, idx) => {
    e.preventDefault();

    const row = (Math.floor(section / level.cols) * level.cols) + Math.floor(idx / level.rows);
    const col = ((section % level.cols) * level.rows) + (idx % level.rows);

    if (gameState.erasing) {
      const tiles = CloneArray(gameState.tiles);
      gameState.moves.push(JSON.stringify(tiles));
      tiles[section][idx].value = null;

      setGameState({
        ...gameState,
        tiles,
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
    const tiles = CloneArray(gameState.tiles);
    gameState.moves.push(JSON.stringify(tiles));
    tiles[gameState.editingDigit.sectionId][gameState.editingDigit.sectionIdx].value = value;

    setGameState({
        ...gameState,
        tiles,
        dialogOpen: false,
        editingDigit: undefined,
    })
  }

  const onNumberInsertCanceled = () => {
    setGameState({
      ...gameState,
      dialogOpen: false,
      editingDigit: undefined,
    });
  }

  const onNoteEntered = () => {
    setGameState({
      ...gameState,
      dialogOpen: false,
      editingDigit: undefined,
      notating: false,
    })
  }

  const onNoteAltered = (value) => {
    const notes = gameState.notes;

    notes[gameState.editingDigit.sectionId][gameState.editingDigit.sectionIdx] = value;

    setGameState({
      ...gameState,
      notes,
    })
  }

  const onNoteCanceled = () => {
    setGameState({
      ...gameState,
      dialogOpen: false,
      editingDigit: undefined,
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

  const onActivateNotes = () => {
    setGameState({
      ...gameState,
      notating: !gameState.notating,
    })
  }
  // /Events

  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <ControlBar
        reset={() => setGameState(NewGame(level))}
        undo={onUndo}
        erase={onEraseNumber}
        notes={onActivateNotes}
        isErasing={gameState.erasing}
        isNotating={gameState.notating}
      />
      <SelectionDlg
        open={!gameState.notating && gameState.dialogOpen !== false}
        hCount={level.cols}
        vCount={level.rows}
        onSelect={onNumberSelected}
        onClose={onNumberInsertCanceled}
        position={gameState.dialogOpen}
        selected={gameState.editingDigit}
      />
      <NotationDlg
        open={gameState.notating && gameState.dialogOpen !== false}
        hCount={level.cols}
        vCount={level.rows}
        onSelect={onNoteEntered}
        onChange={onNoteAltered}
        onClose={onNoteCanceled}
        position={gameState.dialogOpen}
        selected={gameState.editingDigit}
        notes={gameState.notes}
      />
      <StyledTable container>
        {gameState.victory ? <WinScreen onClick={NewGame(level)} /> : null}
        {gameState.tiles?.map((section, idx) => (
          <StyledSection
            key={idx}
            idx={idx}
            section={section}
            hCount={level.cols}
            vCount={level.rows}
            notes={gameState.notes[idx]}
            onCellSelected={onCellSelected}
          />
        ))}
      </StyledTable>
    </Container>
  );
}

export default Sudoku;