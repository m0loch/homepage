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

    const ret = res.sort((a, b) => a.value >= b.value)
        .map(item => `${item.label}: ${item.value}`);

    return ret.toString()
}

const profile = {
    key: 'profile',
    title: 'THE END',
    content: (data) => {

        return `
        This is what we discovered from your answers:
        ${interpret(data)}
        `
    },
}

export default profile;
