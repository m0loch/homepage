import { styled } from '@mui/system';
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
    return (
        <StyledDiv selected={props.selected}>
            {props.value.map((tile, y) =>
                <Orb
                    key={y}
                    value={tile}
                    onClick={props.selected ? ev => props.onOrbClicked(ev, y) : null}
                />
            )}
        </StyledDiv>
    )
}

export default Row;