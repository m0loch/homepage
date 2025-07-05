const InitialState = {
   darkMode: false,
   fifteen: { size: 4 },
   mosaic: { imgName: 'ff7remake', img: '/assets/mosaic/ff7remake.jpg', rows: 5, cols: 10 },
   wordle: { difficulty: 1 },
   tetris: {},
   mastermind: { difficulty: 0 },
   tyles: { level: 0, scores: Array.apply(0, { length: 120 }).map(() => { return { bestScore: 0, isBest: false } }) },
   minesweeper: { difficulty: 1, sectionsState: [true, false, true, false] },
   talks: { selectedTalk: 0 },
   simon: { level: 8, reverseMode: false },
   sudoku: {
      level: 0,
      columns: 2,
      rows: 2,
      values: " 12   1  2   43 ",
      doneList: [],
   },
   wherewolf: {
      phase: 0,
      subphase: 0,
      players: [],
      roles: {
         Villagers: ["The Seer"],
         Werewolves: ["The Pack Leader"],
         Extras: [],
      },
      takenRoles: ["The Seer", "The Pack Leader"],
   },
};

export default InitialState;