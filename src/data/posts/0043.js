import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "May update",
    date: new Date("2024-05-12"),
    smartContent: <>
    {splitText(`
    Last time I said that after finishing Final Fantasy VII Rebirth I would need some time to elaborate my thoughts.
    That was weeks ago.

    Now it's not like I was lying or anything, but <i>things are difficult</i> and I'm trying to juggle work, things that the few free days I managed to get allowed me to finally tackle and <i>more work</i>, so I never got the time to actually face the issue.
    `)}

    <iframe title="Watch out! A non metal song!" style={{ borderRadius: "12px"}} src="https://open.spotify.com/embed/track/3J3ikI3V92StCrZhrknEW6?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <i>...sometimes we make promises we never mean to keep</i>
    <br/><br/>
    {splitText(`
    To beh 100% honest, I've also got to add that I really wanted to beat the hard mode as well but it is -as you might expect- <i>difficult</i>.
    Like <b>actually</b> difficult.
    I don't know, Final Fantasy VII Remake had a similar concept for its hard mode but I considered it to be a outstandingly well balanced, letting you transition from a first playthrough where you can enjoy the plot without spending an excessive amount of effort to a second run where the game would actually challenge your understanding of the mechanics without ever getting unfair.

    I don't feel like I can say the same for this game though, I feel like the difficulty ramps up too much on the second chapter, but maybe it's just myself getting old - who knows, really.

    I'll try again later, at the moment I don't feel very motivated to go back to the game.

    This doesn't mean I'll never post my opinions on it, I just need to focus on something else for a while.

    ...wow, that was meant to be just an introduction but it took forever ^^

    When I actually decided to post a new update today, I was aiming at sharing the fact that I started a small Godot project on my own in order to:
    <ul>
        <li>gaining some extra (probably unneeded) knowledge</li>
        <li>have a little mobile project of my own</li>
        <li>better understand Firebase, which will come in handy for work in a short</li>
    </ul>

    The problem is that I've already set up a state machine, the Firebase integration, UI navigation, a basic Firestore db, a login authentication, the app distribution... but I still don't have a game concept for it.

    What am I doing with my life?
    Only time will tell.
    `)}
    </>,
    signature: `Romeo`
};

export default post;