import { styled } from '@mui/system';
import InputBtn from './inputBtn';
import Orb from './orb';

const StyledDiv = styled('div', {
    shouldForwardProp: (props) => props !== 'selected'
})(
    ({ theme, selected }) => ({
        display: "flex",
        width: "fit-content",
        padding: "10px",
        backgroundColor: selected ? theme.palette.masterMind.selected : "transparent",
        borderRadius: "5px"
    })
);

function Row(props) {
    const disabled = props.value.findIndex(item => item === undefined) > -1;
    return (
        <StyledDiv selected={props.selected}>
            {props.value.map((tile, y) =>
                <Orb
                    key={y}
                    value={tile}
                    onClick={props.selected ? ev => props.onOrbClicked(ev, y) : null}
                />
            )}
            <div style={{ width: "20px" }} />
            {props.selected ?
                <InputBtn disabled={disabled} onClick={() => props.onSubmit(props.value)} />
                : null}
        </StyledDiv>
    )
}

export default Row;