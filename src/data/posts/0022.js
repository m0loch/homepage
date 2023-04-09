import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Tyles!",
    date: new Date("2023-01-06"),
    smartContent: (
        <>
            {splitText(`
            As promised, Tyles is up!
            I don't really know what I'll put together for the next updates as I'm kind of overwhelmed by both having to crunch through my last days at my current job, setting up my move to Milan and starting with my new experience on the next monday.
            I'm pretty excited but also very stressed and I managed to injure my left foot while visiting potential new homes.

            I guess that I'll probably try to polish some of the old projects as I feel that what I considered being "a little rough around the edges" and "good enough for now" deserves some more attentions.
            BUT THAT'S BOOOOOORING.

            Well, we'll see.
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;