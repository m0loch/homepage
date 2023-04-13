const Shuffle = (arr) => {
    const ret = [];
    const shuffleBag = [...arr];

    for (; shuffleBag.length > 0;) {
        ret.push(shuffleBag.splice(Math.floor(Math.random() * shuffleBag.length), 1)[0]);
    }

    return ret;
}

function Shuffler(chapter) {
    return {...chapter, choices: Shuffle(chapter.choices)};
}

export default Shuffler;