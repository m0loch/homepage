import { useState } from "react";

import { splitText } from '../../components/common/textFunctions';
import { StyledCollapseHeader, PlainCollapse } from "../../components/posts/collapse";
import CustomImage from "../../components/posts/customImage";
import scalesImg from '../../images/post-0054/scales.png';
import serenoaImg from '../../images/post-0054/serenoa.png';
import benedictImg from '../../images/post-0054/benedict.png';
import fredericaImg from '../../images/post-0054/frederica.png';
import rolandImg from '../../images/post-0054/roland.png';

function StatefulPost() {
    const [open, setOpen] = useState([false]);

    const handleStateChange = idx => {
        const newState = [...open];
        newState[idx] = !open[idx];
        setOpen(newState);
    }

    return (
        <>
        <CustomImage
            alt="Triangle Strategy logo"
            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1850510/header.jpg?t=1734425685"
        />

        {splitText(`
        Released in 2022, Triangle Strategy is yet another beautiful game that I should have played way earlier.

        We're talking about a tactical JRPG, very reminiscent of the late Final Fantasy Tactics, allegedly made by the same team that had already brought us Octopath Traveler.

        Given the weird title, I expected much emphasis to be put on some sort of mechanic like the Weapon Triangle from Fire Emblem (where swords have the advantage over axes, which beat spears, that in turn are well-suited against swords), but that's definitely not the case: while the number three is a recurring theme in the game, I'm pretty sure that you can't find the word "triangle" anyware in the game - with the exception of the title of course.

        For example, the storyline revolves around the destinies of the three nations of Norzelia that, after 30 years from the last big war over resources (the Saltiron war, if you're wondering), are celebrating their prolonged state of peace and how good they are at collaborating over a newly discovered mine that will bring lots of benefit for all the parties involved.

        <i>You know where this is going.</i>
        `)}

        <CustomImage
            src="https://gh.cdn.sewest.net/assets/ident/news/3e937c7d/battle_control_en-o2omkrye8.jpg?quality=65"
            alt="Triangle Strategy in VR - example image"
        >
            It's also available for VR on the Meta Quest store o.o
        </CustomImage>
        <br/>
        <h2>The rule of three</h2>
        <CustomImage
            src={scalesImg}
            alt="An image of the Scales of Conviction"
            align="right"
        >
            The famed Scales of Conviction
        </CustomImage>
        <p>Mechanically, while following the struggles of our main character Serenoa Wolffort (son of Symon, heir to House Wolffort), we can develop is personality around three main moral convictions: <span style={{color:"green"}}>Morality</span>, <span style={{color:"#FFC300"}}>Utility</span> and <span style={{color:"#F08080"}}>Liberty</span>, which have <i>some</i> kind of effect on the game, but not really <i>that</i> much.</p>
        {splitText(`

        The in-game representation of the concept is the Scales of Conviction, an artifact traditionally used by House Wolffort when facing a difficult decision - just a fancy way counting votes during a war council, if you think about it, but I'll talk about it again later.
        For the momento, I'll just say that the game does a good job on making the player at least feel like their action are having an actual impact, presenting various choices where the boundaries are not as clear-cut as one might expect.

        Then, we have the three nations that form the continent of Norzelia: Glenbrook, Aesfrost and Hyzante.

        The Kingdom of Gleenbrook is the center of the story, a land where the fields are always green, the commerce flourish and the good King Regna is revered.

        The frost-bitten duchy of Aesfrost, situated on the northern mountains, specializes in metallurgy and scientific research.

        In the east we have the Holy State of Hyzante, a fortified city in the desert that produces the salt used all over Norzelia.

        On yet another level, King Regna of Glenbrook is supported by three High Houses: House Wolffort, House Telliore and House Falkes.

        There's also another instance of this recurring theme that we'll have to discuss in due time, for now let's stop here.

        <h2>Characters and Story</h2>

        The game features 30 playable characters, which may seem a lot compared to the usual RPG standards, but for a tactical RPG that doesn't feature permanent death for the characters is a balanced number in my opinion.

        But they are still way too many to be discussed here, so I'll just focus on the central ones.

        <h3>Serenoa Wolffort</h3>`)}
        <CustomImage
            src={serenoaImg}
            alt="In-game description of Serenoa"
            align="left"
        />
        {splitText(`As our silent protagonist, Serenoa is an overpowered young warrior of noble blood.

        At the beginning of the game we quickly learn that the actual Lord of House Wolffort, his father Symon, is ill, so he needs to step up and take the leadership of his clan, which includes an arranged marriage with Frederica.
    
        He's also close friend with Roland, one of the sons of King Regna, and he's under the tutelage of Benedict, a long time counselor of his father.

        I need to point out that the plot is not as open as I would have loved it to be, but I found that having to write a character that stays consistent and believable even when the user's choices have the power of making him take some WILD swings in opinion must have been a really difficult job, but the team nailed it in my opinion.

        He's loyal to his friends, considerate towards his subjects and generally honest and likable even when he ends up doing something despicable.

        <h3>Frederica Aesfrost</h3>`)}
        <CustomImage
            src={fredericaImg}
            alt="In-game description of Frederica"
            align="left"
        />
        {splitText(`A scholar of Fire Magic, she starts out as a young girl that never left her home while still having the personality to stand her ground, and over the course of the game becomes an ambassador for the Roselle - the ethnic minority of the game (a theme we'll have to discuss later).

        She's half-sister of the current Archduke Gustadolph and siblings Erika and Thalas with whom she shares the same father, but her mother was a concubine - a Roselle, to be precise.

        In general, she's too kind for her own good and she immediately embraces the ways of House Wolffort as her noble upbringing was not as smooth as one would expect, given that her siblings seemed to do their best to make her life miserable.

        Again: I can't help but appreciate the way she handles herself over the course of the game, learning to fight for her ideas without becoming a cliché, and facing the actions of her own family without losing empathy towards them.

        On the other hand I need to point out that Erika and Thalas are <i>really</i> designed to be evil and despicable without any redeemable quality, so with a little effort one can find some lazyness from the writers, but I digress.

        <h3>Roland Glenbrook</h3>`)}
        <CustomImage
            src={rolandImg}
            alt="In-game description of Roland"
            align="left"
        />
        {splitText(`Son of King Regna, brother of Cordelia and Frani - the heir apparent to the throne - Roland lives his condition of being a royal as a gilded cage.

        Over the course of the game he faces some <u>serious</u> struggles, often things bigger than what he can actually handle, leading to some weird but kind of justifiable decisions.

        Combat-wise is a good character, he's not the best damage dealer not the most reliable in terms of surviavbility, but his horse gives him great mobility and his lance some extra flexibility due to the extra range.

        <h3>Benedict Pascal</h3>`)}
        <CustomImage
            src={benedictImg}
            alt="In-game description of Benedict"
            align="left"
        />
        {splitText(`Benedict has served House Wolffort since forever and his main feat is in his incredible intelligence.

        He understands the intricacies of politics on an unmatched level and puts his loyalty to House Wolffort above anything else.

        On the battlefield he acts as a support character while being able to stand his ground when fighting on his own.

        His relationship with Serenoa is interesting to say the least, as Serenoa trusts him and considers him pretty much a friend, while Benedict puts all his efforts towards House Wolffort and has some <i>ulterior</i> motives that stay hidden over the course of multiple runs.

        All in all his contribution is very important over the course of the game and he's probably the more interesting during the various finals.

        <h3>A quick word abount the endings</h3>

        Speaking of which: the game features four different finals: three straightforward ones and the classic good ending that you can unlock only by taking some precise choices over the course of the game.

        While the Golden Route is obviously the most fulfilling one, I was left in awe by the other three, because (minor spoiler warning) when reaching Chapter 17 you'll end up facing a choice between three different proposals coming from Frederica, Roland and Benedict.
        Each of those proposals has its own <b>major</b> pros and cons, to the point that every one of them means undergoing some major sacrifice.
        `)}

        <StyledCollapseHeader
            caption={"Actual spoilers"}
            open={open[0]}
            onClick={() => handleStateChange(0)}
        />
        <PlainCollapse in={open[0]} timeout="auto" unmountOnExit>
            {splitText(`
            I can't stress enough on how I appreciated the writing, and the one thing that I really need to highlight is how the character balance shifts over the course of the story.
            A quick example: in chapter 7 House Wolffort faces a major decision, with Roland being willfully ready to surrender himself in order to protect the rest of the party (and the people of Glenbrook), while Frederica refuses to accept that course of action because she refuses to leave him behind without a fight.

            Later, when the player is faced with the last big decision of the game, Roland proposes to sacrifice the freedom of a small group of individuals for the greater good (while abdicating his position), and once again Frederica opposes the idea with all her might.

            In both cases the character's nature is consistent: Roland, while still being a very passionate individual, approaches both situations with the idea that the best solution is a sacrifice for the greater good, being it his own position <i>even if he kind of considers it a burder</i> or the chance at freedom of an oppressed people.
            On the other hand Frederica, by her own nature, can't leave anyone behind without a fight.

            Benedict, on the other hand, is a very wise and pragmatic individual - perhaps too much, and sometimes seem to lack the fundamentals of empathy.
            His intelligence, though, saves the day in multiple situations, and even when things go awry and you end up seeing the worst of him (in one of the endings, ndr) he appears to be the more ruthless version of himself, <i>but still himself</i>.

            The <b>big</b> thing I loved is the way Chapter 17 is handled: when having to choose the ending you can really feel the struggle of the party, and choosing one of the three basic ones means having to face the anger of one of the closest characters to Serenoa that will rage and leave the party for good.
            The execution here was wonderful, and the narrative reached 
            `)}
        </PlainCollapse>
        {splitText(`
        <h2>Closing thoughts</h2>

        Now that I made it <i>painfully clear</i> that I loved this game and that you should play it as well if you haven't already done so, I want lower the bar a bit talking about what didn't work that well in my opinion.

        I'll start by saying that not all the secondary, playable characters are up to par with the main ones: characters like Julio, Rudolph, Corentin, Jens, Hossabara etcetera have glimpses of a personality but are ultimately not on par with "secondary main" characters like Anna, Hughette, Erador and Geela - and some are painfully bland like Piccoletta and Flanagan for example.

        Some side characters like Sycras and Clarus are really interesting for their ambivalent roles in the main story, as is Dragan's role of being an ambitious and selfish individual that at some points gets considered by other characters like some kind of martyr.
        Other side characters are just terribly shallow, like Sorsley, Tenebris, Erika or Thalas.

        The Roselle being discriminated over fake religious issues is a great tool to talk about some real life problems in a very "safe" way - on one hand their a great narrative tool, on the other the whole issue about being discriminated over <i>pink hair</i> is lackluster at best.

        Some of the world building makes <b>no sense whatsoever</b>: what do you mean nobody knows what's outside Norzelia?
        Salt is very important, but how can it be <i>that</i> important?
        And, for summing up the two previous points: this games features <b>warships</b> but <b>nobody knows what the damn sea is</b> - which, I realize, would render the whole issue with salt stupid, but COME ON.
        There are no guns in this game, explosives are treated like a sudden and huge invention, the aforementioned warships feature no cannons at all, yet all of a sudden Aesfrost invents <b>a giant cannon</b> out of nowhere.

        Let's say that sometimes the suspension of disbelief is really hard to maintain.

        <h3>Mechanics</h3>
        The voting system is another great mechanic from a narrative standpoint, forcing the player to interact with multiple characters over important decisions in order to convince them on their votes; this makes the whole decision process way less trivial than the standard making the player "feel" the weight of some choices, even if it becomes a bit of a chore over multiple playthroughs.

        Speaking of multiple playthroughs: getting the platinum felt bad over some achievements, like seeing the (very basic and shallow) character story for a specific character basically meant having to to a full playthrough again.
        In the same way, I have nothing against asking the player to play every optional fight in order to get an achievement, but having to do so <i>in the same run</i> meant having to play almost everyone of them <u>except one</u> at least two times.

        As a last remark: giving the player the possibility to skip whole scenes is good, <i>especially in a very verbose game like this</i>, but a chapter selection options would have made the whole process of obtaining the platinum way smoother.
        `)}
    </>
    )
}

const post = {
    title: "Triangle Strategy",
    date: new Date("2025-01-25"),
    smartContent: <StatefulPost/>,
    signature: `Romeo`
};

export default post;