const interpret = (data) => {
    const filter = {
        meo: data.meo ?? 0,
        dav: data.dav ?? 0,
        fra: data.fra ?? 0,
        rob: data.rob ?? 0,
    }

    const res = [];
    for (var value in filter) {
        res.push({label: value, value: filter[value]});
    }

    res.sort((a, b) => b.value - a.value);

    let interpretation = "";

    if (res[0].value === res[1].value) {
        interpretation = `
            Surprisingly, we have a tie!
    
            It must be really difficult for you to live with multiple souls inhabiting your brain...

            `;
    } else {
        interpretation = `
            Oh hi there ${res[0].label}!

            You tried to hide your personality, but I managed to discover your true nature, given your score of ${res[0].value}.

        `;
    }

    return `${interpretation} Here's your full profile!${res.map(item => `\n${item.label}: ${item.value} points`).toString()}`;
}

const profile = {
    key: 'profile',
    title: 'THE END',
    content: (data) => interpret(data),
}

export default profile;
