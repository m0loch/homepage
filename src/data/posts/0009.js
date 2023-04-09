import { Link } from "react-router-dom";

const post = {
    title: "Vacations, vacations",
    date: new Date("2022-06-23"),
    smartContent: (
        <>
            <p> After the release of <a href="https://ddrop.it/">ddrop.it</a> and the relative crunch, I've finally been able to take some time off work and come to <a href="https://en.wikipedia.org/wiki/Genoa" target="_blank" rel="noreferrer">Genoa</a> and meet my friends.</p>
            <br />
            <p>We're planning to work a little on BugFormer in the next days but also to spend some time at the beach -which is something I don't get to do very often while living on the alps.</p>
            <br />
            <p>I've took advantage of this sudden free time and finally fixed the last two things that bothered me on Wordle, now I'd like to put some work on the <Link to="/projects">projects section</Link> and then maybe port a game that me and <a href="https://www.linkedin.com/in/davidejones88">Dav</a> released for iOS nearly a decade ago.</p>
        </>
    ),
    signature: "Romeo"
};

export default post;