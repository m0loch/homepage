import { splitText } from '../../components/common/textFunctions';

const post = {
    date: new Date("2023-07-24"),
    title: "Doing nothing~",
    smartContent: (
        <>
            {splitText(`
                Hi folks!

                I basically have nothing to say this time around, as I'm finally on vacation and I'm trying to actually rest.
                To be 100% honest, I just decided to post this because I'm removing my <s>Twitter</s> (RIP) account from the About section.

                I <i>know</i> nobody will care, but I really stopped using it after Musk took over and now that it's being rebranded I'm deleting my data from the platform altogether.

                But cheer up!
                I've found a free game worth sharing!
                Go play <a href="https://store.steampowered.com/app/1714040/Super_Auto_Pets/">Super Auto Pets</a>!
            `)}
        </>
    ),
    signature: `Romeo`
};

export default post;