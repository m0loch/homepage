import charmeo from '../../images/meo.gif';

const post = {
    title: "Happy Republic Day",
    date: new Date("2022-06-02"),
    images: [charmeo],
    smartContent: (
        <>
            <p>First of all, let's celebrate once again that Italy's a republic instead of a <s>redacted</s> monarchy.</p>
            <br />
            <p>This is a tentative update with a new way to precompile posts, with <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Links</a> and other "smart" content.</p>
            <br />
            <p>I know this may sound ridicolous, but I went through all the effort just for the sake of adding this gif of myself:
                <br />
                <img alt="self-portraying gif" src={charmeo} style={{ display: "block", margin: "15px auto 0" }} />
            </p>
            <br />
            <p>The other big news I can bring is that I'm kind of stressed because lately things at work are being kind of heavy - not in a <i>bad</i> way, more like in a <i>they do actually require a ton of effort</i> one, but I still managed to play the full story of Inscryption in my spare time.</p>
            <br />
            <h3><b style={{ textAlign: "center", display: "block", margin: "auto" }}>PLAY INSCRYPTION.</b></h3>
        </>
    ),
    signature: `Happy Pride month averyone
    Romeo`
};

export default post;