import FifteenPreview from '../components/projects/fifteen/fifteenPreview';
import MosaicPreview from '../components/projects/mosaic/mosaicPreview';
import WordlePreview from '../components/projects/wordle/wordlePreview';
import RunnerPreview from '../components/projects/runner/runnerPreview';
import TetrisPreview from '../components/projects/tetris/tetrisPreview';
import FuturePlans from '../components/projectsSection/futurePlans';
import TalksPreview from '../components/projects/talks/talksPreview';

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
{
    key: 3,
    title: "Endless runner",
    content: "The game that you could play by just turning your wifi off",
    fullContent: RunnerPreview,
    url: "runner",
},
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
    key: 100,
    title: "Possible followups",
    content: `Just a list of the things I'd like to add to this site in the future.

    No deadlines though!`,
    fullContent: (FuturePlans),
}];

export default games;