import { styled } from '@mui/system';
import HintTile from './hintTile';
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
                    onTap={props.selected ? ev => props.onOrbClicked(ev, y) : null}
                    onLongTap={props.selected ? ev => props.onShowSelector(ev, y) : null}
                    onContextMenu={props.selected ? ev => props.onShowSelector(ev, y) : null}
                />
            )}
            <div style={{ width: "20px" }} />
            {
                props.selected
                    ? <InputBtn disabled={disabled} onClick={() => props.onSubmit(props.value)} />
                    : <HintTile value={props.hint} digits={props.value.length} />
            }
        </StyledDiv>
    )
}

export default Row;