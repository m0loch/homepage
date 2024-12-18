import { styled, keyframes } from '@mui/system';
import { Button } from '@mui/material';
import StyledCell from '../styledComponents/styledCell';

const appearAnimation = keyframes`
    0%   { opacity: 0 },
    100% { opacity: 1 },
`;

const StyledBG = styled('div')(
    () => ({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1300,
        backgroundColor: 'black',
        opacity: '0.5'
    })
);

const StyledPanel = styled('div',
    { shouldForwardProp: (prop) => prop !== 'position' && prop !== 'totalSize' && prop !== 'selection' },
)(
    ({ theme, position, totalSize, selection }) => ({
        top: position?.y,
        left: position?.x,
        zIndex: 1500,
        backgroundColor: theme.palette.primary.main,

        position: "absolute",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "160px",
        alignItems: "center",
        justifyContent: "center",

        opacity: 0,
        animation: `${appearAnimation} .1s ease-in .1s 1 normal forwards`,

        transform: `translate(-${selection.col*100/totalSize}%,-${selection.row*100/totalSize}%)`,

        [theme.breakpoints.down('md')]: {
            width: "120px",
        }
    })
);

const StyledLabel = styled('p')(
    ({ theme }) => ({
        color: theme.palette.sudoku.value,
    })
)

function NotationDlg(props) {
    if (!props.selected) {
        return null;
    }
    const options = props.notes[props.selected.sectionId][props.selected.sectionIdx];

    const onCellSelected = (idx) => {
        // Locally edit the value
        options[idx] = options[idx] === 1 ? 0 : 1;

        // External call needed to actually update the state
        props.onChange(options);
    }

    return (props.open ? <>
        <StyledBG onClick={props.onClose} />
        <StyledPanel
            position={props.position}
            totalSize={props.hCount * props.vCount}
            selection={props.selected}
        >
            {options.map((value, idx) =>
                <StyledCell
                    key={idx}
                    idx={idx}
                    value={idx+1}
                    toggle={options[idx] === 1}
                    hCount={props.hCount}
                    vCount={props.vCount}
                    onClick={() => onCellSelected(idx)}
                />
            )}
            <Button onClick={() => props.onSelect(new Array(props.hCount * props.vCount).fill(1))}>
                <StyledLabel style={{ margin: "auto", fontSize: "3.5vmin" }}>OK</StyledLabel>
            </Button>
        </StyledPanel>
    </> : null);
}

export default NotationDlg;