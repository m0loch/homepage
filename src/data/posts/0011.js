const post = {
    title: "Settings",
    date: new Date("2022-07-10"),
    content: `
    I wanted to expand a little on the existing projects before starting to adding a new one, so now it's possible to play the Fifteen puzzle on a 3x3 board (which makes it not a 15 puzzle anymore, but I digress).

    In order to add the settings and make them work, though, I ended up having to import Redux in the project - and that's something I wanted to avoid, in order to try to keep the project <i>easy and relaxed</i>.

    Installing the redux and react-redux packages, as one can imagine, proved to be an easy task: you just need to install them using your packet manager of choice, import them, realize that you can't access the site anymore because the SSL support has broken, update everything, <a href="https://github.com/akveo/react-native-ui-kitten/issues/996">fix yet another bug that breaks random things</a>, go on with your work.
    
    <center><h4>BOOOOOOORING~</h4></center>
    `,
    signature: `Rant over
    Romeo`
};

export default post;