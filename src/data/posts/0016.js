import profanities from '../../images/profanities.jpeg';

const post = {
    title: "Rewrite everything",
    date: new Date("2022-10-15"),
    images: [profanities],
    smartContent: (
        <>
            <p>I'll be straightforward: coding Tetris was fun back in the day when I had some fun with Tetris 99 and I discovered the existence of <a href="https://harddrop.com">harddrop.com</a> which gave me pleny of insight to write my own version.</p>
            <br />
            <p>I then proceeded writing my own stand-alone React version without even checking all the marks on the TODO list and moved on as soon as I found something more interesting.</p>
            <br />
            <p>Integrating that inside the website proved to be more annoying than it should because, having written it with a React.Component object oriented approach while the rest of the site was properly built on high order components, I found myself having to deal with some strange behaviours and interactions when it came down adding the mobile controls.</p>
            <br />
            <p>That lead to some good old debugging:</p>
            <img alt="One day we'll have better integrated tweets, but today's not that day" src={profanities} style={{ display: "block", margin: "15px auto 0", maxWidth: "80%" }} />
            <br />
            <p>At the end of the day I basically started rewriting everything as an HOC and, to be truly honest, facing some interesting issues like the handling of the game loop via hooks, but that's taking an unreasonable amount of time that I don't really have at the moment.</p>
            <br />
            <p>And that's why I started Final Fantasy 7 Remake: Intergrade and preordered the remake of Crisis Core.</p>
        </>
    ),
    signature: `Romeo`
};

export default post;