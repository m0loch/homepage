import { styled } from '@mui/system';
import Orb from './orb';

const StyledDiv = styled('div',
{ shouldForwardProp: (prop) => prop !== 'cols' })(
    ({ theme, cols }) => {
        let colsDef = "";
        for (let i = 0; i < cols; i++) { colsDef += "1fr "}

        return ({
            display: "grid",
            gridTemplateColumns: colsDef,
            gridTemplateRows: "1fr 1fr",
            justifyItems: "center",
            alignItems: "center",

            width: "50px",
            height: "50px",
            margin: "auto",
            [theme.breakpoints.down('md')]: {
                width: "25px",
                height: "25px",
            }
        })
    }
);


function HintTile(props) {
    const orbs = [];
    for (let i = 0; i < props.value?.correct; i++) orbs.push(4); // black hint
    for (let i = 0; i < props.value?.wrongPos; i++) orbs.push(5); // white hint
    for (let i = orbs.length; i < props.digits; i++) orbs.push(undefined); // no hint

    return (
        <StyledDiv cols={props.digits/2}>
            {orbs.map((value, idx) =>
                <Orb
                    key={idx}
                    hint={"true"}
                    value={value}
                />)}
        </StyledDiv>
    )
}

export default HintTile;