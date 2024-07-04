import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Hi, I'm Romeo, I'm old",
    date: new Date("2024-07-04"),
    smartContent: (
        <>
            {splitText(`
                Hi people,
                I had a lot of things going lately and couldn't afford to spare any kind of time for this online journal, then I suddenly realized I might <i>actually</i> want to post something in a not-so-distant future and it dawned on me that I had probably posted <i>nothing</i> during the entirety of june.

                So, here we are with a quick recap of the last few weeks:
                <ul>
                    <li>I went to Paris and spent a week there, occasionally attending a Tool concert and falling ill a couple of days;</li>
                    <li>after coming back I worked a couple of days, then forfeited the rest of the week thanks to a tonsillitis (yeah, that's probably the same thing I catched in Paris);</li>
                    <li>at that point I had to really, <i>really</i> struggle to catch up with my work, because deadlines don't care about my medical condition and the guys from my team are either already overwhelmed by their own work or not competent/interested in what I needed to deliver;</li>
                    <li>I also had to mourn the departure of my ex-colleague Iolanda, that decided to leave the company - you will be missed :\\</li>
                    <li>I progressed a little with the Godot project I briefly mentioned in the previous post, but the whole concept behind it was centered on sending a push notification to the user once a day and, <i>guess what</i>, implementing those seems like a pain, and thus we stumble;</li>
                    <li>I went back to Final Fantasy 7 Rebirth and faced the Hard mode like men do, I feel like the platinum is achievable even though I find some parts very difficult and/or frustrating;</li>
                    <li>I've turned 40, and I never planned for that.</li>
                </ul>

                One day I will explain (rant?) something more about my job, document the Godot project and talk about Final Fantasy 7 Rebirth in a <u>very</u> extensive way.

                For now, just be patient with this old shell of a man.
            `)}
        </>
    ),
    signature: `Have a nice summer,
    Romeo`
};

export default post;