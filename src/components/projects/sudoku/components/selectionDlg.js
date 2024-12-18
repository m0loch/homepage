import { styled, keyframes } from '@mui/system';
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

function SelectionDlg(props) {
    const options = Array.apply(0, { length: props.vCount * props.hCount });

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
                    hCount={props.hCount}
                    vCount={props.vCount}
                    onClick={() => props.onSelect(idx+1)}
                />
            )}
        </StyledPanel>
    </> : null);
}

export default SelectionDlg;