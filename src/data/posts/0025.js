import { splitText } from '../../components/common/textFunctions';

const post = {
    title: "Let's brag a little bit",
    date: new Date("2023-03-11"),
    smartContent: (
        <>
            {splitText(`
            Hello there,
            as you may (or may not) have noticed I've basically stopped working on the website since changing my job.

            That's not something I'm too happy with, but I've started this little project as a sort of homework while I was working on something non-game related while still willing to do so.

            I can't say I'm 100% happy with how it turned out but I feel like I've learned my fair share of things while just having fun.

            Now the workload is much higher and I'm a lot more involved in things, which means that it's much more difficult for me to just turn the PC on after work and/or in the weekend and build something for myself.
            I hope to find a new balance because I'd love to fix some things here and there (i.e.: I feel like the runner is garbage, I'm not going to lie) but I won't make any promise.

            In the meanwhile you can go play the game we released!
            `)}
            <p>You can find it <a href="https://www.sisalfunclub.it/">here</a>, but be aware that you can play it only if you live in Italy...</p>
        </>
    ),
    signature: `Romeo`
};

export default post;