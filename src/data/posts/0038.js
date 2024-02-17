import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Catching up!",
    date: new Date("2024-02-17"),
    smartContent: (
        <>
            {splitText(`
                I think it's time to actually catch up with things a little bit, the last months have been quite a mess and I found little time to care about this site.
                Hopefully I should be able to have a little more free time from now on, or at least I hope.

                But, first thing first, here's my 2023 in a nutshell!
            `)}
            <iframe title="2022 in a nutshell" style={{ borderRadius: "20px" }} src="https://open.spotify.com/embed/playlist/6Lwm6yrqXZT6g847Q95uvo" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <br/><br/>
            <p>Going back to the issue, this is basically the situation (be aware, rant incoming):</p>
            <ul>
                <li>Housing in Milan is <b>way</b> too expensive. Ever since I've left my old flat I've been searching for another accomodation to no avail - the whole idea that in the three years I've spent away from Milan the rents have risen of a dry 60% is <i>baffling</i>;</li>
                <li>the direct consequence is that I don't want to settle for an overpriced traphole, but I'd rather wait for something more interesting to come up, too bad that I've found more actual scams than plausible solutions;</li>
                <li>not having an home in Milan, while still being contractually forced to work from there twice a week, means having to commute to and from there every week (for an aggregate of 6 to 8 hours total) and having to rent a room in a B&B - oddly enough, that <i>still</i> costs less than actually living there, but it's like working a sixth day per week and that's very tiring;</li>
                <li>work related: luckily enough I ended up not being involved in the Roblox project I was talkin' about back in september, to balance things out I spent last week optimizing a VR project for the Meta store that apparently couldn't go over the 40fps.</li>
            </ul>
            {splitText(`
                With that out of the way, let's move on on a lighter note.
                I've bought a new computer and, while not being able to find the energy to work on something creative, I played some games I'd like to talk about:

                <h3>Chants of Sennaar</h3>
                <a href="https://store.steampowered.com/app/1931770/Chants_of_Sennaar/">Chants of Sennaar</a> is a gem, a puzzle game with clean graphics that manages to keep you hooked and move the plot forward without the need of cutscenes, big walls of text or any kind of explanation.
                You, as the protagonist, wake up at the base of a tower without understanding a single word but, by interactive with other characters, you slowly piece together the languages you face and the lore behind the whole story.
                I truly can't recommend playing this game enough.

                <h3>Slay the Princess</h3>
                <a href="https://store.steampowered.com/app/1989270/Slay_the_Princess/">Slay the Princess</a> represents the exact opposite of the spectrum: while Chants of Sennaar gets each and every single of its points across via pure game design, this game is <b>heavily</b> reliant on a verbose narrative, with a very small cast of characters manifesting the multitude of facets of their personalities through some brilliant writing and some very convincing voice acting.
                I really don't want to say anything about the game because pretty much everything could end up being a spoiler, I'll just say that the first playthrough felt very good and it gave good re-playability vibes.
                I'm under the impression that trying to earn a platinum will ruin its magic - we'll see.

                There is another game I wanted to discuss, but I believe this post is long enough already.
            `)}
        </>
    ),
    signature: `See you in the near future,
    Romeo`
};

export default post;