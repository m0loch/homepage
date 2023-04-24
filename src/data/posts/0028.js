import { splitText } from '../../components/common/textFunctions';
import { Link } from "react-router-dom";

const post = {
    title: "Liberation Day",
    date: new Date("2023-04-25"),
    smartContent: <>
    {splitText(`
    I'll cut straight to the point: I'm not used at celebrating the 25th of April, but for this year I'll do an exception.

    You see, this is the day when we're supposed to celebrate the victory of the italian resistance against nazism and fascism.
    Sadly enough we're governed by people that feel like that maybe history should have taken another turn, people that still live the illusion of grandeur that fascism represented, people that want to rewrite our whole past implying that everything was fine and the only bad thing Mussolini ever made was bonding to the nazist Germany.

    That's bullshit, many of the arguments that neofascists abuse are either big exaggerations or fake news, all while acting like Mussolini's rise to power was supported by the people rather than based on blood and violence.

    Whatever, that's enough.

    `)}
    <p>In order to properly celebrate, I used the small vacation time I had to write my own version of Solitaire - you'll find it in the <Link to="/projects">projects section</Link>.</p>
    {splitText(`

    That means that said section now contains 10 minigames, I think it's almost time to do some actual polish around here...
    `)}
    </>,
    signature: `Romeo`
};

export default post;