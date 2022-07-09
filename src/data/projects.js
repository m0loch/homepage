import FifteenPreview from '../components/projects/fifteen/fifteenPreview';
import FuturePlans from '../components/projectsSection/futurePlans';

const games = [{
    key: 0,
    title: "Magic 15",
    content: "An old school puzzle",
    fullContent: (FifteenPreview),
    url: "fifteen",
},
{
    key: 1,
    title: "Mosaic",
    content: "A picture has been shattered! Glue it back together before mom finds out!",
    url: "mosaic",
},
{
    key: 2,
    title: "Wordle",
    content: "Just somebody else's successful idea",
    url: "wordle",
},
{
    key: 100,
    title: "Possible followups",
    content: `Just a list of the things I'd like to add to this site in the future.

    No deadlines though!`,
    fullContent: (FuturePlans),
}];

export default games;
