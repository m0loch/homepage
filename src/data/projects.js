import FifteenPreview from '../components/projects/fifteen/fifteenPreview';
import MosaicPreview from '../components/projects/mosaic/mosaicPreview';
import WordlePreview from '../components/projects/wordle/wordlePreview';
//import RunnerPreview from '../components/projects/runner/runnerPreview';
import TetrisPreview from '../components/projects/tetris/tetrisPreview';
import FuturePlans from '../components/projectsSection/futurePlans';
import TalksPreview from '../components/projects/talks/talksPreview';
import MastermindPreview from '../components/projects/mastermind/mastermindPreview';
import TylesPreview from '../components/projects/tyles/tylesPreview';
import MinesweeperPreview from '../components/projects/minesweeper/minesweeperPreview';
import SolitairePreview from '../components/projects/solitaire/solitairePreview';
import SimonPreview from '../components/projects/simon/simonPreview';

const games = [{
    key: 0,
    title: "Magic 15",
    content: "An old school puzzle",
    fullContent: FifteenPreview,
    url: "fifteen",
},
{
    key: 1,
    title: "Mosaic",
    content: "A picture has been shattered! Glue it back together before mom finds out!",
    fullContent: MosaicPreview,
    url: "mosaic",
},
{
    key: 2,
    title: "Wordle",
    content: "Just somebody else's successful idea",
    fullContent: WordlePreview,
    url: "wordle",
},
// {
//     key: 3,
//     title: "Endless runner",
//     content: "The game that you could play by just turning your wifi off",
//     fullContent: RunnerPreview,
//     url: "runner",
// },
{
    key: 4,
    title: "Tetris",
    content: "A game of four",
    fullContent: TetrisPreview,
    url: "tetris",
    disableOnMobile: true,
},
{
    key: 5,
    title: "Talks",
    content: "A quick take on text-based adventures",
    fullContent: TalksPreview,
    url: "talks",
},
{
    key: 6,
    title: "Master Mind",
    content: "A colour-based code breaking game",
    fullContent: MastermindPreview,
    url: "mastermind",
},
{
    key: 7,
    title: "Tyles!",
    content: "My first commercial success!",
    fullContent: TylesPreview,
    url: "tyles",
},
{
    key: 8,
    title: "Minesweeper",
    content: "Yet another classic game to prevent you from working",
    fullContent: MinesweeperPreview,
    url: "minesweeper",
},
{
    key: 9,
    title: "Solitaire",
    content: "Because every once in a while you end up with a deck of cards and nobody to play with",
    fullContent: SolitairePreview,
    url: "solitaire",
},
{
    key: 10,
    title: "Simon",
    content: "Prove the power of your mind!",
    fullContent: SimonPreview,
    url: "simon",
},
{
    key: 100,
    title: "Possible followups",
    content: `Just a list of the things I'd like to add to this site in the future.

    No deadlines though!`,
    fullContent: (FuturePlans),
}];

export default games;
