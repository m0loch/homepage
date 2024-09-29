import React from 'react';
import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import grasslands_farms from '../../../images/post-0047/ch3/grasslands-farm.jpg';
import grasslands_kalm_view from '../../../images/post-0047/ch3/grasslands-kalm.jpg';
import grasslands_kalm_invasion from '../../../images/post-0047/ch3/kalm-invasion.jpg';
import grasslands_swamp from '../../../images/post-0047/ch3/grasslands-swamp.jpg';
import mythril_museum from '../../../images/post-0047/ch3/mythril-museum.jpg';
import mythril_cave from '../../../images/post-0047/ch3/mythril-cave.jpg';
import mythril_turks from '../../../images/post-0047/ch3/mythril-turks.jpg';
import mythril_golem from '../../../images/post-0047/ch3/mythril-golem.jpg';
import mythril_gear from '../../../images/post-0047/ch3/mythril-gear.jpg';
import junon_cpr from '../../../images/post-0047/ch3/junon-cpr.jpg';
import junon_fort_condor from '../../../images/post-0047/ch3/junon-fort-condor.jpg';
import junon_fort_condor_board from '../../../images/post-0047/ch3/junon-fort-condor-board.jpg';
import junon_panorama from '../../../images/post-0047/ch3/junon-panorama.jpg';
import junon_parade from '../../../images/post-0047/ch3/junon-parade.jpg';
import junon_highwind from '../../../images/post-0047/ch3/junon-highwind.jpg';
import corel_costa_del_sol from '../../../images/post-0047/ch3/corel-costa-del-sol.jpg';
import corel_gold_saucer from '../../../images/post-0047/ch3/corel-gold-saucer.jpg';
import corel_gold_saucer_from_north_corel from '../../../images/post-0047/ch3/corel-gs-from-north.jpg';
import corel_prison from '../../../images/post-0047/ch3/corel-prison.jpg';
import corel_reactor from '../../../images/post-0047/ch3/corel-reactor.jpg';
import gongaga_reactor from '../../../images/post-0047/ch3/gongaga-reactor.jpg';
import gongaga_prayer from '../../../images/post-0047/ch3/gongaga-prayer.jpg';
import gongaga_zack_parents from '../../../images/post-0047/ch3/gongaga-zack-parents.jpg';
import gongaga_airstrip from '../../../images/post-0047/ch3/gongaga-airstrip.jpg';
import cosmo_canyon from '../../../images/post-0047/ch3/cosmo-canyon.jpg';
import cosmo_gi_nattak from '../../../images/post-0047/ch3/cosmo-gi-nattak.jpg';
import cosmo_planetologists from '../../../images/post-0047/ch3/cosmo-planetologists.jpg';
import cosmo_observatory from '../../../images/post-0047/ch3/cosmo-observatory.jpg';
import cosmo_river_of_lights from '../../../images/post-0047/ch3/cosmo-river-of-lights.jpg';
import nibelheim_water_tower from '../../../images/post-0047/ch3/nibelheim-water-tower.jpg';
import nibelheim_model_employee from '../../../images/post-0047/ch3/nibelheim-model-employee.jpg';
import nibelheim_surveillance from '../../../images/post-0047/ch3/nibelheim-surveillance.jpg';
import nibelheim_code from '../../../images/post-0047/ch3/nibelheim-code.jpg';
import cetra_aerith_powers from '../../../images/post-0047/ch3/cetra-aerith-powers.jpg';
import cetra_ancient_city from '../../../images/post-0047/ch3/cetra-ancient-city.jpg';
import cetra_final_showdown from '../../../images/post-0047/ch3/cetra-final-showdown.jpg';
import cetra_temple_run from '../../../images/post-0047/ch3/cetra-temple-run.jpg';

function Chapter3() {
    return (
        <>
            <Bookmark id="WB_Summary">How the planet changed in just 27 years</Bookmark>
            {splitText(`
            There are two things to say about Gaia and its representation in Rebirth: the first one is that, given the differences in technology and game style, Rebirth just <i>had</i> to go for a different style of presentation, the other is that they had every right to change things around in order to smooth the experience and the narrative and, for better or for worse, they decided to go all-in.
            `)}
            <CustomImage
                alt="Shinra helicopters invading Kalm"
                src={grasslands_kalm_invasion}
                align="right"
            >
                Kalm is stunning. <i>Please ignore the helicopters.</i>
            </CustomImage>
            {splitText(`
            In the following subsections I'll discuss the differences that struck me the most, but I'm going to use this space to briefly talk about the former conundrum - by talking about something completely different.

            Back in the days I played and mostly enjoyed Horizon: Zero Dawn and its follow up, Horizon: Forbidden West.
            I consider them great games, even though I've got plenty of witnesses that can testify I spent most of my time complaining about how I hate open worlds.
            It's a personal issue of mine, I hate these big maps filled of distractions that prevent you to go any further with the actual plot because you constantly end up following every possible tangential thing you encounter, and it's of course a matter of taste.

            But the thing that really struck me, <a href="https://horizon.fandom.com/wiki/List_of_Real_Locations_in_Horizon_Forbidden_West">after understanding how much the in-game world was supposed to be based on real places from our current time</a> is how <i>small</i> the world actually was, compared to the <i>actual</i> world we live in and, conversely, Aloy was <i>supposed</i> to traverse.

            Now, back to Rebirth: Final Fantasy 7 was the first 3D iteration of the old way the series handled their worlds - a pretty empty world map with some settlements scattered here and there, knowing that the player's mind would build on that schema to recontextualize everything, with their actual fantasy to fill the gaps.
            You didn't need to have a fully fleshed up world back in the day, you just needed <i>the idea</i> of a world with some well placed locations and, by making THOSE lively and vibrant, the players would just perceive the whole world as more than the sum of its parts.
            `)}
            <YouTubeVideo videoId={"QttV3qp-E64"} caption="The party leaving Kalm for the first time" />
            {splitText(`

            Nowadays things are a bit more complex, and mimicking that approach would definitely be perceived as cheap and unsatisfactory by the audience.
            There are obviously different ways that I'm <i>not</i> going to cover here on how to tackle the issue, but we all know where we're going with this: the devs decided to go for the open world approach and that comes with its pros and its cons.
            `)}
            <p>Now, the world of Rebirth is gorgeous, <u>even more than what it should</u><InlineSpoiler mask='*'>See the video above, and how Aerith and Red XIII discuss that even if the grasslands are so green, the Planet is actually barely keeping up...</InlineSpoiler>, and it's filled to the brim of extra details to discover, traces of older civilizations, points of interest etc etc - but it <i>feels</i> smaller than it should, and that's an intrinsic problem of open worlds.</p>

            {splitText(`
            With that being my main issue with the map itself, I'll go on describing each location and how it changed compared to its original counterpart.
            `)}

            <Bookmark id="Grasslands">The grasslands</Bookmark>
            <CustomImage
                alt="Farms in the grasslands"
                src={grasslands_farms}
            >
                A view of the grasslands, with farms and the mountains in the background
            </CustomImage>

            {splitText(`
            Back in the original game the party left Midgar (with no possibility of coming back until much, much later) and -while having the plan of regrouping at Kalm- is faced with the grasslands being the users' first taste of the world map.
            `)}
            <CustomImage
                alt="The swamps"
                src={grasslands_swamp}
                align="right"
            >
                The swamp in 2024
            </CustomImage>
            {splitText(`
            At the time, the grasslands were a big plain of nothing, with different textures representing grass, dirt and infamous swamp acting as a barrier before the Mythril mines.
            Players would be guided to the rest of the plot by the few points of interest available to them: Kalm, Choco Bill's chocobo stables the cave on the other side of the swamp and the menacing shadow of the Midgar Zolom.
            The "standard" playthrough of a player with no knowledge of the game would follow the schema:
            <ul>
                <li>reach Kalm and listen to Cloud's recollection of the Nibelheim incident;</li>
                <li>leave Kalm, wander around towards east;</li>
                <li>(optional) stumble in to the Midgar Zolom and get roasted by its Beta attack;</li>
                <li>enter the stables, possibly obtain the Choco/Mog materia (the first Summon materia of the game), get instructed on how to catch a chocobo;</li>
                <li>actually catch a chocobo, cross the swamp avoiding the snake;</li>
                <li>witness a corpse of one of said snakes impaled on a tree, <u>heavily implying that he's WAY stronger than the party</u>, move on to the Mythril mines section.</li>                
            </ul>
            `)}
            <CustomImage
                alt="Midgar's view from Kalm's clocktower"
                src={grasslands_kalm_view}
                align="left"
            >
                A view of Midgar from the top of Kalm's clocktower
            </CustomImage>
            {splitText(`
            Rebirth goes for a completely different approach, as dictated by the current gaming scene's environment, and that sets the tempo for the entire game:
            now players will be able to leave Kalm only after a couple of story beats (and possibly indulging in some sidequests) and once outside they'll be guided to the farms, then to the swamp, then to the stables, all while witnessing a world that's way more full of content and learning of the various regional side activities Chadley is gently forcing everyone to do.

            The whole exploration process gives the player the idea of a world that feels way more alive than before, with traces of some thicker lore that's not strictly related to the plot, like ruins of old roads / aqueducts, abandoned factories and the such.

            Most importantly, the <s>Midgar Zolom</s> <a href="https://en.wikipedia.org/wiki/J%C3%B6rmungandr">Midgardsormr</a> is now a mandatory boss that doesn't <i>ever</i> feel unbeatable, to the point that when it tries to drown Cloud (in a knee-deep swamp that becomes a damn trench for a brief moment just to give us a <i>cutscene</i>) and gets defeated by an improptu appearance of Sephiroth you just feel like you've been stolen a kill.

            All in all: things are different both in presentation and in the plot, and I can understand people getting upset over it.
            `)}

            <Bookmark id="Mythril_Mines">The mythril mines</Bookmark>
            <CustomImage
                alt="The museum at the entrance"
                src={mythril_museum}
            >
                We just crossed a swamp infested with giant snakes. What better place for a <i>museum</i>.
            </CustomImage>
            <br/>
            <p>This section is a bit of a stretch, as this is not an actual "Location", but more like a dungeon linking two open world areas - but I wanted to talk about this as it symbolizes a common trend around the whole game.</p>
            <CustomImage
                alt="The inner mine"
                src={mythril_cave}
                align="left"
            >
                Ok, <i>this</i> looks like a mine
            </CustomImage>

            {splitText(`
            The original game had the mythril mines serve the same purpose of linking two major areas, but it was hardly "a mine"... it was more like a series of monster-infested tunnels traversing the mountain, ending with a short encounter with the Turks that could fill the party in on some plot points.

            This version of the location is a lot more like what you could expect: it is definitely a place that <i>at least used</i> to feature human activity in some capacity.

            The entrance of the cave is not even an actual mine, but a museum, and you'd better get used to this: this world has an incredibly strong focus on tourism, while at the same time alternating overcrowded places and incredibly empty ones.
            `)}
            <CustomImage
                alt="Rude and Elena"
                src={mythril_turks}
                align="right"
            />
            {splitText(`
            After entering and catching up with the Black Robes, the party splits for the first time, introducing the idea of sections with mandatory party compositions - starting with Cloud, Aerith and Tifa descending into the oh so empty tunnels towards our first encounter with the Turks of the current game.

            This, of course, ends with a boss fight, because this is a new game and we need to re-state who the Turks are, other than presenting <s>blonde Yuffie</s> Elena to the party.

            After the fight Tseng shows up, and, after a quick chat, the party ends up split again, but with the player now following Barret and Red XIII. 
            `)}
            <CustomImage
                alt="Balancing puzzle"
                src={mythril_gear}
                align="left"
            >
                Also: who thought of putting an heavy gear on a HANGING TREE ROOT?
            </CustomImage>
            {splitText(`
            I personally consider this section <i>tragic</i> in its own way, because everything in this chapter between the Turks fight and the exit feels like content padding of the worst type: the whole wall-climbing, cart-pushing nature of the puzzles here makes you feel like you shouldn't be engaging in such activities with a party formed by a one-armed leader and his dog-shaped companion.

            Also, let me reinstate this: these caves are really devoid of human life.
            While I understand that this is motivated by the fact that the whole place is a testament of how things worked at the time of the Old Republic and that Shinra moved on from this all, the location manages to be <i>too gorgeous</i> for its own merit and doesn't feel like abandoned at all.

            All in all, even though a lot of this content feels tacked on in an insincere way, the chapter manages to be short enough to avoid alienating the players: after a quick boss, the party manages to regroup and move on to the next region.
            `)}
            <CustomImage
                alt="The mythril golem"
                src={mythril_golem}
                align="center"
            >
                To be fair, the Mythril Golem comes out of nowhere, but it's cool
            </CustomImage>
            
            <Bookmark id="Junon">Junon and its surroundings</Bookmark>
            <CustomImage
                alt="A view of Junon from afar"
                src={junon_panorama}
            />

            <CustomImage
                alt="An abandoned Fort Condor board"
                src={junon_fort_condor_board}
                align="right"
            >
                Minigames! Minigames!
            </CustomImage>
            {splitText(`            
            Junon is the second open area of the game, and is partly used to set in stone some rules, partly to introduce a couple of extra elements: of course you'll ride chocobos here as well, but now they've got a special ability; time for another protorelic chase, but this time you'll have to play a strategic minigame.

            `)}
            <CustomImage
                alt="Fort Condor in the distance"
                src={junon_fort_condor}
                align="left"
            >
                Fort Condor in the distance
            </CustomImage>
            {splitText(`            
            For the ones of you that played the Intergrade DLC, we're talking about the Fort Condor tabletop game, that I personally consider a welcome comeback, and this lets us talk about the differences between this and the original games, given the fact that the <i>actual</i> Fort Condor has been retconned away from the continent; it's now placed on a distant, inaccessible island on the south. 

            I know that some people are really mad about something trivial as locations being moved around, but we have to face the truth: the original Fort Condor was just a way to add an extra, environmentally-themed minigame, but didn't add much to the actual plot.
            27 years later we have a new iteration of that minigame that is way better implemented, and the environmentalism is not the focus anymore, so the devs are free to just move around the pieces of the puzzle in order to give the players a better game experience.            
            `)}
            <CustomImage
                alt="Yuffie getting rescued"
                src={junon_cpr}
                align="right"
            >
                Back in the day you had to resuscitate Priscilla - now a <i>slightly less</i> underaged girl
            </CustomImage>
            {splitText(`
            This is not even the worst "offense" we're going to witness, so let's just move to more important matters.
            
            When visiting Lower Junon we experience the full effect of the modern rewriting:
            <ul>
                <li>this time around the Bottomswell will attack Yuffie instead of Priscilla because the dev needed to treat her as a character that's not optional anymore;</li>
                <li>the party will stay for the night like in the original, but everything hasbeen rewritten to accomodate for the new <i>tone</i> the mystery around Cloud's psyche has taken;</li>
                <li>Roche will pop up just for the sake of announcing his own cameo - LAAAAAME~</li>
                <li>the original game then add you go through yet another inconsequential minigame where you had to interact with Mr Dolphin to jump on a platform and find a way to Upper Junon - there was <i>no way in the multiverse</i> this could have gone differently than just having a more fleshed out minigame here.</li>
            </ul>
            `)}
            <CustomImage
                alt="Cloud dressed as a Shinra soldier"
                src={junon_parade}
                align="left"
            >
                Ready for the parade
            </CustomImage>
            {splitText(`
            A quick note about the parade: the whole "let's pass as a Shinra soldier" was very unhinged back in the days, and now the game doubles down by having Tifa and Aerith - two girls with no formal soldier training - follow Cloud around.
            It's played for laughs, so no big issue - nobody could taka as <i>realistic</i> the original version of this section, so there's no purpose in complaining here.
            
            The idea of Rufus knowing the party whereabouts and letting them be in order to meet them makes even <i>more</i> sense, too bad that the Yuffie's attempt at assassination is so randomly execute.
            Also, Barret's reaction at Cloud's attempting to bargain some sort of truce with Rufus is completely out of character.
            `)}
            <CustomImage
                alt="The Highwind"
                src={junon_highwind}
                align="right"
            >
                At least we get to see the Highwind
            </CustomImage>
            {splitText(`
            I'll just avoid mentioning anything about the subsequent escape, the meeting with Roche and the whole traversal of the Meridian Ocean.

            Let me just say I love Queen's Blood and I've played plenty of real life card games' tournaments, but while the chapter ended up being fun I just hate how much they ended up changing just for the sake of having you play some minigames WHILE having some cameos WHILE trying to picture Hojo as a supervillain rather than "just" a mad scientist.
            `)}
            
            <Bookmark id="Corel">Costa del Sol, Mt Corel, the Gold Saucer</Bookmark>
            <CustomImage
                alt="The Gold Saucer"
                src={corel_gold_saucer}
            />
            {splitText(`
            After all these adventures, we finally reach the main open area of Rebirth.

            This is both due to the fact that it contains the Gold Saucer, that we'll need to visit multiple times for plot reasons, but also by the sheer amount of different locations it harbors.

            Mix in the fact that it's also the area where most of the minigames are located, and the math becomes very easy.
            `)}
            <CustomImage
                alt="Tifa and Aerith at the beach"
                src={corel_costa_del_sol}
                align="left"
            >
                Is the fan service worth it?
            </CustomImage>
            {splitText(`
            The first location we visit is Costa del Sol and right after finishing a chapter equally split between a kind-of-forced minigame and a boss sequence, the player is presented with a <i>series</i> of forced minigames followed by a boss sequence.
            
            The game stumbles once again on its need to force feed side content to its player base, and since Costa del Sol was a tourist location even in the original game there was no possible way we were doomed to end like this from the start.
            But the "worst" is yet to come, no worries.
            `)}
            <CustomImage
                alt="The ruins of the Corel reactor"
                src={corel_reactor}
                align="right"
            >
                Quite a mess
            </CustomImage>
            {splitText(`
            Moving on with the plot, after the boss fight (I really preferred how the original treated Hojo's character development, but I don't want to become redundant), Yuffie forces herself in the party and everyone leaves the village; the next stop is the nearby reactor atop the near mountains.

            After reaching the top of the mountain, the party faces another boss fight and reaches what remains of the Corel reactor, has its first encounter with a weapon and moves on.

            The descent towards North Corel offers a good spot for the game to throw at us another extra bit of content that wasn't in the original game: this time, instead of just activating a switch and then backtracking, the player will have to traverse a dungeon specifically designed to give Yuffie her own moment.
            This is probably the prime example of the kind of extra content everybody would have loved to see back in 1997, or at least I swear that the teenager me did - even if I didn't exactly envision this mine and these rules of engagement.`)}
            <CustomImage
                alt="The Gold Saucer as seen from North Corel"
                src={corel_gold_saucer_from_north_corel}
                align="left"
            >
                The Gold Saucer as seen from North Corel
            </CustomImage>
            {splitText(`
            After yet another minigame section, the party ends up in North Corel and everybody there bullies Barret.
            Classic old fun.

            I won't go into any extra detail on how different the Barret section plays out because I've already mentioned it in Barret's section, let's just skip to <b>the Gold Saucer</b>!

            I find this new iteration of it to be too crowded and impossible to navigate, exactly like an <i>actual</i> amusement park, so nothing to question here and let's move on. 

            I'll also avoid commenting the different terms on which the shooting is treated, but I can't avoid complaining about the whole Corel Prison plot line refactor.`)}
            <CustomImage
                alt="The Gold Saucer as seen from North Corel"
                src={corel_prison}
                align="right"
            >
                On the right: a chocobo stable and a pillar leading to the Gold Saucer; on the left: yet another minigame installment
            </CustomImage>
            {splitText(`
            Basically, after reaching the prison -that's not a prison anymore, but just another settlement trying to mimic che <i>actual</i> Gold Saucer with some second brand minigames- the original story would have seen us get in touch with Barret, find Dyne, solve the mystery and then find a way up.
            This time we instead get ambushed by some goons, then we're forced to feed a chocobo in order to win a race, and just then we'll be allowed to go back to our plot.

            Dyne is not even on the run, he's already been dealt with so Barret can just reach the place he's being held captive and achieve some sort of resolution - through the usual boss fight.
            Did I just say one? Make it two, as we also need to fight Palmer on a frog mecha - you didn't expect Barret to be able to properly mourn the loss of his long lost friend, did you?.
            And why not add a rail shooter section on top of that, just for the sake of it?

            Neeeeeeext!`)}

            <Bookmark id="Gongaga">Gongaga!</Bookmark>
            <CustomImage
                alt="The jungle and the ruins of the Gongaga reactor"
                src={gongaga_reactor}
            />
            {splitText(`
            Gongaga is a weird one.
            After starting out as an optional village -or rather, the ruins of one- in the original game, it took a much more central role in Crisis Core, being the hometown of the late Zack Fair.
            
            It has basically become a big Crisis Core shout out, to be completely honest.
            Not that it's a bad thing by any means.`)}
            <CustomImage
                alt="Cissnei and Cait Sith praying"
                src={gongaga_prayer}
                align="left"
            >
                Isn't it a little tasteless to have a robot cat pray on a monument?
            </CustomImage>

            {splitText(`
            The small jungle that once just harbored a blown-up reactor and a town build around a graveyard, commemorating said reactor's explosion, has now been inflated to be a whole, labyrinthic region where the village and the reactor are not even <i>that</i> close.

            The reactor that once was just hiding the Summon Titan materia, now will be visited multiple times and will also be the stage of the first real manic episode from Cloud, right between a Scarlet boss fight and a bizarre trip in the lifestream where Tifa will, in this order:
            <ul>
            <li>fall while avoiding being sliced in half by Cloud;</li>
            <li>be engulfed by a weapon - creatures we shouldn't meet at this point of the game;</li>
            <li>witness different factions of Whispers "fighting";</li>
            <li>experience some flashbacks <i>that she shouldn't be experiencing alone and right now</i>;</li>
            <li>risk being killed by yet another appearance of the <i>omnipresent</i> Sephiroth.</li>
            </ul>
            `)}

            <CustomImage
                alt="Cloud with Zack parents"
                src={gongaga_zack_parents}
                align="right"
            >
                Your son sacrificed himself for this dunce. I'm so, so sorry.
            </CustomImage>

            {splitText(`But the important difference between this iteration and the original game lies in the village itself: while back in 1997 the user could meet Zack's parents and, provided either Tifa, Aerith or both were in the party, have a clue about the fact that their son could be someone of any kind of importance, this time around the party splits up and we will have Cloud witnessing Aerith's decision to meet them in order to talk about his saviour.

            It doesn't end particularly well, with Cloud spitting out some crude remark about the guy and causing the ire of both Aerith and Tifa.

            It would be criminal to not point out that the village mayor is the former Turk Cissnei that, as she did in Crisis Core, keeps some mystery about her past, but it's heavily implied that she still hopes to see Zack come back someday.`)}

            <CustomImage
                alt="The first encounter with the Tiny Bronco"
                src={gongaga_airstrip}
                align="left"
            >
                Now, <i>that</i>'s what I call a <i>random encounter</i>
            </CustomImage>
            {splitText(`The last things that have been added to the area are a Turk virtual arena (please, just stop), the area where you'll end up fighting the Queen's Blood final boss and the air strip.
            
            Now, Gongaga is a big chapter full of unexpected content, but there was no way for me to be prepared to meet Cid so early.

            Or the fact that Cid could have been changed <i>that</i> much in the last 27 years.

            Oooh boy, I had no idea about what Rebirth still had in store for me.
            `)}
            
            <Bookmark id="Cosmo_Canyon">Cosmo Canyon</Bookmark>
            <CustomImage
                alt="Road to Cosmo Canyon"
                src={cosmo_canyon}
            />
            {splitText(`
            There are a few things to say about Cosmo Canyon, but I'll start from the one that stings: planetology.
            `)}
            <CustomImage
                alt="Tifa, Aerith, and the planetologists"
                src={cosmo_planetologists}
                align="right"
            >
                The first rule of Planetology is: you do not talk about Planetology.
            </CustomImage>
            {splitText(`
            In the original game Cosmo Canyon is a place where the party wasn't even supposed to take a stop, bar a convenient breakdown of the buggy.
            Once there, the party would take a breather, think of the situation they're living, discover <s>Red XIII</s> Nanaki's past and, with the help of the old sage Bugenhagen, discover more around the planet and find a new resolve to move on - this is also where Barret takes a new oath of revenge against Shinra, for example.

            The current version of Cosmo Canyon, though, feels way less intimate.

            Everything is much bigger and way more confusing, and the whole location is filled to the brim with tourists.`)}
            <CustomImage
                alt="A look inside the observatory in Cosmo Canyon"
                src={cosmo_observatory}
                align="left"
            >
                Even the observatory is now a museum...
            </CustomImage>
            {splitText(`I know I'm getting pedantic with the point, but adding crowds everywhere doesn't make the place feel alive, it makes it chaotic.

            This time around Bugenhagen is still a scientist, a wise old man and a fatherly figure for Red XIII, but he's also a wannabe enterpreneur that explicitly inquires the party about their impressions of the River of Lights, because you know he's happy that tourists like the ceremony but he wanted more people to develop an interest in science through it.

            He's talking about marketing, he's thinking about a <a href="https://sproutsocial.com/glossary/marketing-funnel/">damn funnel</a>.
            `)}
            <YouTubeVideo videoId={"qa1yrkaLnQ0"} caption="Bugenhagen's lesson on the world of Gaia is still iconic, though" />
            {splitText(`

            There is this whole contrast between the spirituality that one would expect from the situation and the way everything appears to be just a little bit <i>off</i>.
            And I kind of think that this is something the writer wanted, but I don't really get their message.
            `)}
            <CustomImage
                alt="The River of Lights ceremony"
                src={cosmo_river_of_lights}
                align="right"
            >
                Impressive! Now we just have to work on user retention
            </CustomImage>
            {splitText(`
            On one hand the original bonfire scene has been reworked to what's supposed to be a touching moment for Aerith to share her experience as a Cetra, but the planetologist meeting where she and Tifa take part reminds you more than an alcoholics anonymous session rather than anything, Barret gets scolded off by one practitioner that says there's nothing he can to to save the Planet ("Only she can save herself") and even Bugenhagen himself, when Tifa tells him the party has met weapons and that she fell in the Lifestream, tells her to go see a doctor because she must be hallucinating.

            Moving on: Red XIII coming home is funny, but I talked about this already and <i>sometimes</i> I remember to avoid getting redundant.
            `)}
            <CustomImage
                alt="Gi nattak telling the party the origin of the Black Materia"
                src={cosmo_gi_nattak}
                align="left"
            >
                Gi nattak in all his <i>stature</i>
            </CustomImage>
            {splitText(`
            His reunion with his dad should be a tear jerker, but the moment gets immediately stolen by Gi nattak that wants to bring us home and add some much appreciated lore about the tribe and the Black Materia, it's just <i>too sudden</i>.

            I also struggle keeping my suspension of disbelief up when I think that the guy invited the party to his private island in order to beg us to bring him the Black Materia <i>all while his fellow tribesmen try to kill our beloved characters</i>. 

            Wrapping up: a very suggestive location, but with some bad moments.
            And I hate both Gears and Gambits and the local Glide de Chocobo minigame.
            `)}

            <Bookmark id="Nibelheim">The Nibelheim area</Bookmark>
            <CustomImage
                alt="Modern day Nibelheim"
                src={nibelheim_water_tower}
            />
            {splitText(`
            I feel like everything just built up to bring me to this chapter - probably the only one I actually hated.

            The whole trip to the actual town Nibelheim gets <u>properly</u> hyped up by Tifa... but then you discover that it's just been reworked to be a kind of resort for the Black Robes.
            
            It's <i>nuts</i>.

            And everyone in the village is just <i>so</i> open about it.

            The original weirdness of the party entering Nibelheim going "<i>Excuse me</i> Cloud, wasn't this supposed to be a burned down village?" has been deleted.
            The eerie interactions with its inhabitants not recognizing neither Cloud or Tifa are completely gone.
            `)}
            <CustomImage
                alt="The party being spied by security cameras"
                src={nibelheim_model_employee}
                align="right"
            >
                In this universe, Vincent is still a paid Shinra employee, somehow
            </CustomImage>
            {splitText(`
            There's just no more façade to be kept: Shinra was supposed to have rebuilt Nibelheim and populated it with paid actors in order to cover up the incident from 5 years ago (not the smartest of plans if you ask me, but that's another discussion), but that's not the case anymore.
            You just get Black Robes and nursing staff dressed in outfits that resemble the local folklore.
            Also, for some reasons, they rebuilt Nibelheim exactly as it was for no apparent reason, since there's nothing to cover up anymore.

            Whatever, let's just move on.

            The <i>other</i> issue I have with this region is the Shinra Manor.
            `)}
            <CustomImage
                alt="The code location revealed"
                src={nibelheim_code}
                align="left"
            >
                Wow, it took about 12 seconds
            </CustomImage>
            {splitText(`
            In the original game it was eerie, unsettling and evocative.`)}
            <p>While navigating it you encountered monsters like <a href="https://finalfantasy.fandom.com/wiki/Ghirofelgo">Ghirofelgo</a> that increased the creepyness factor a lot, and you had the chance of recruiting Vincent by collecting hints<InlineSpoiler mask='*'>Rebirth references the safe code by just writing it on a wall behind some boxes, which really makes you think about how the devs wanted to stay close to the original game but at the same time couldn't <i>manage</i> to do so...</InlineSpoiler> and opening the safe (also finding che Odin Summon Materia in the process).</p>
            {splitText(`

            Now, I didn't like how it was depicted in Crisis Core, but this is a new level of disappointment: they cut off the victorian part of the mansion and once entering you'll be forced to just go to the basement.
            But you're not going to descend a sinister stair of case - you're taking a badly disguised, perfectly modern elevator.

            Under the mansion you'll now find a perfectly operative and quite-well maintained lab that still manages to be perfectly empty, except of course for the local monster population.
            `)}
            <CustomImage
                alt="The party being spied by security cameras"
                src={nibelheim_surveillance}
                align="right"
            >
                Somebody's watching as we're sneaking in the lab!<br/><i>(spoiler: it's just ChadleyHojo)</i>
            </CustomImage>
            {splitText(`
            This gets even weirder when you then find the <i>other</i> basement (connected to the same elevator, obviously) where Sephiroth discovered the truth about his origins and the chambers where Zack and Cloud where held captive: the two basements' architecture is so different that things just stop making sense.

            I also found it <i>absurd</i> to have the lab itself being controlled by an AI modeled on Hojo, just for the sake of re-using a known character model by making it really clear it's not him.

            I'm not going to say anything about the plot of chapter 11 because I see what they were doing here, I'll just say that Cait Sith's dungeon is just bad, that the box-throwing minigame has clunky controls, that it being only accessible by the story mode <i>and</i> needed for the platinum is preposterous and that I love the local chocobos.
            `)}

            <Bookmark id="Temple_Cetra">The temple of the Ancient and their city</Bookmark>
            <CustomImage
                alt="Vincent looking at the City of the Ancients from afar"
                src={cetra_ancient_city}
            />
            {splitText(`
            I'll just skip the Meridian Ocean and Gilgamesh Island as they have no real connection with anything else.

            At the same time, even though they're not proper regions, I still want to spend a couple of words on the two final locations - I don't use the world "dungeons" because, while the Temple of the Ancients is a prime example of what a dungeon actually is, the latter is barely a stage for a couple of minutes.
            `)}
            <CustomImage
                alt="The party traversing the temple"
                src={cetra_temple_run}
                align="left"
            >
                Weeeeee!
            </CustomImage>
            {splitText(`
            Functionally, the Temple of the Ancients works in the same way it used to in the original: you get in just after the Turks, Cait Sith goes for something that's not even really a sacrifice in order to retrieve the Black Materia, Sephiroth shows up and gets it from Cloud.

            One could argue that it has been moved way north, that it doesn't feature the weird ancient spirits but a bunch of Shinra soldiers, that the clock puzzle is gone, that it's too long, that the water is wet and so on and so forth, but it would be utterly meaningless.

            The near-totality of Chapter 13 is meant to be spent inside the Temple (feel free to do some preparations before entering, of course), and that comes with two strong design implications: the dungeon needs to progress the story and to engage the player for a reasonable amount of time.
            `)}
            <CustomImage
                alt="Aerith using her Cetra powers"
                src={cetra_aerith_powers}
                align="right"
            >
                "Alexa, rebuild the Temple"
            </CustomImage>
            {splitText(`

            The original incarnation of the Temple was not as <i>stretchable</i> as everybody would have liked it to, so it either had to be redesigned from scratch or interwoven with just some new features mixed in.

            If you ask me, chapter 13 is the best in the entire game just because of that: it tries to stick as much as possible to the original plan, things get tweaked a bit in order to fit the rest of the game, some content is added in order to let a character shine (in this case: Aerith), some for coherence (Cloud cosplaying Sephiroth), some for coherence with other subplots.
            Some content gets re-done completely (Sephiroth getting the Black Materia) because we're in 2024 and we can do a more cinematic scene that we were capable of in 1997, I might not like the outcome too much (I rarely enjoy streams of Whispers) but I do love the thought process behind those kind of decision.
            `)}
            <CustomImage
                alt="Cloud and Aerith before Sephiroth"
                src={cetra_final_showdown}
                align="left"
            >
                Let's end this
            </CustomImage>
            {splitText(`And then -after a brief walk in the Sleeping Forest- there's the City of the Ancients.

            Chapter 14 is the polar opposite of chapter 13: it does the bare minimum to show its fidelity to the original's aesthetics... but it's just a ginormous, multi-staged boss fight.

            I'm not even complaining about it, it's the last chapter and things need to be wrapped up, possibly by adding an extended boss fight that forces you to plan ahead your free time; I'm just sad you spend in the actual city a couple of minutes tops.

            <i>We'll talk about <u>that</u> scene -that needed some more breathing room- in its own section</i>.
            `)}
        </>
    )
}

export default Chapter3;