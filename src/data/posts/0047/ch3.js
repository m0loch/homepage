import React from 'react';
import { splitText } from '../../../components/common/textFunctions';
import { Bookmark } from "../../../components/posts/bookmarks";
import InlineSpoiler from "../../../components/posts/inlineSpoiler";
import CustomImage from "../../../components/posts/customImage";
import YouTubeVideo from '../../../components/posts/youtubeVideo';

import farms from '../../../images/post-0047/ch3/grasslands-farm.jpg';
import kalm_view from '../../../images/post-0047/ch3/grasslands-kalm.jpg';
import kalm_invasion from '../../../images/post-0047/ch3/kalm-invasion.jpg';
import swamp from '../../../images/post-0047/ch3/grasslands-swamp.jpg';

function Chapter3() {
    return (
        <>
            <Bookmark id="WB_Summary">How the planet changed in just 27 years</Bookmark>
            {splitText(`
            There are two things to say about Gaia and its representation in Rebirth: the first one is that, given the differences in technology and game style, Rebirth just <i>had</i> to go for a different style of presentation, the other is that they had every right to change things around in order to smooth the experience and the narrative and, for better or for worse, they decided to go all-in.
            `)}
            <CustomImage
                alt="Farms"
                src={kalm_invasion}
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
                src={farms}
            >
                A view of the grasslands, with farms and the mountains in the background
            </CustomImage>

            {splitText(`
            Back in the original game the party left Midgar (with no possibility of coming back until much, much later) and -while having the plan of regrouping at Kalm- is faced with the grasslands being the users' first taste of the world map.
            `)}
            <CustomImage
                alt="The swamps"
                src={swamp}
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
                src={kalm_view}
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
            
            <Bookmark id="Junon">Junon and its surroundings</Bookmark>
            
            <Bookmark id="Corel">Costa del Sol, Mt Corel, the Gold Saucer and the desert</Bookmark>
            
            <Bookmark id="Gongaga">Gongaga!</Bookmark>
            
            <Bookmark id="Cosmo_Canyon">Cosmo Canyon</Bookmark>
            
            <Bookmark id="Nibelheim">The Nibelheim area</Bookmark>
            
            <Bookmark id="Meridian_Ocean">The ocean and Gilgamesh island</Bookmark>
            
            <Bookmark id="Temple_Cetra">The temple of the Ancient and their city</Bookmark>


            {/* Corel
            - now that we've reached the prison, rather than get in touch with Barret, find Dyne, solve the mystery and then find a way up, we get ambushed by some goons, forced to feed a chocobo in order to win a race, and just then we'll be able to go back to our plot */}
        </>
    )
}

export default Chapter3;