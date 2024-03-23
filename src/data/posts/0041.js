import { splitText } from '../../components/common/textFunctions';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CustomImage from "../../components/posts/customImage";
import { styled } from '@mui/system';

import balatroImg from '../../images/post-0041/balatro.png';
import kobImg from '../../images/post-0041/kob.png';

const Cheers = styled(CelebrationIcon)(
    ({ theme }) => ({
        fontSize: "unset",
        fill: theme.palette.link,
    })
)

const post = {
    title:     <><Cheers/>  Year #2  <Cheers/></>,
    date: new Date("2024-03-26"),
    smartContent: <>
    {splitText(`
    It seems that this page has actually been up for <b>two years</b> without having a real purpose other than being some kind of gym and/or frustration outlet.

    After a while it pretty much turned out to be a non-publicized blog of mine with the side benefit of giving me something to mindlessly play when taking a break between meetings.

    Maybe I should actually try to think of this as something I should add to my CV or at least broadcast a little (i.e.: linking it to my bio on socials / forums?) but I don't really feel like it, everything I've published so far is <b>SO UNREFINED</b>...

    I guess I'll think about revamping the graphics and re-look at everything for scratch while playing <a href="https://store.steampowered.com/app/2379780/" target="_blank">Balatro</a> (like every cool guy does nowadays) and <a href="https://store.steampowered.com/app/2523120/" target="_blank">King of the Bridge</a>.

    Both the games are original takes on well-known concepts, let me just sum things up a bit:

    <h3>BALATRO</h3>
    `)}
    <CustomImage
        alt="Numbers everywhere"
        src={balatroImg}
        align="left"
    >
    </CustomImage>
    {splitText(`

    We're talking about a roguelite (<a href="https://isitaroguelike.com/" target="_blank">not</a> a roguelike - but that's an endless debate) based on poker rules where you need to score a set amount of points in a set amount of hands in order to progress to the next table.
    
    You start with your usual 52 cards deck, but there are a lot of modifiers you can appeal to over the course of a run - booster packs, cards combinations that level up, the joker system, tarots that let you mess with the cards of your deck etcetera.
    
    The premise is simple, the rules are easy enough, the experience is engaging and you'll end up wasting hours without even realizing it.
    Also, the replayability is over the roof and there seems to be a huge amount of content to be unlocked.
    
    10/10, give me more of this!
    
    <h3>KING OF THE BRIDGE</h3>
    `)}
    <CustomImage
        alt="Having fun while rules lawyering?"
        src={kobImg}
        align="right"
    >
        Have you ever played chess on the Obra Dinn?
    </CustomImage>
    {splitText(`

    DISCLAIMER: it seems like this is a student project and I'm so happy to see a young mind coming up with a simple yet effective idea and coming up with such a brilliant execution.

    I won't go into much detail about the specifics because I'd rather avoid spoilers, but the game itself it's a brilliant twist of the classic chess concepts, with stylish graphics and funny humour.

    Given the simplicity of the concept and the cheap price, I consider it a must play, do yourself a favor and grab it - you'll also help a young developer out.

    AND WATCH OUT FOR THE DUCK!
    `)}
    </>,
    signature: `Don't worry though, I'm still waiting to play FF7 Rebirth...
    Romeo`
};

export default post;