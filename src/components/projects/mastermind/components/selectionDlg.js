import Orb from './orb';
import { styled, keyframes } from '@mui/system';

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
    { shouldForwardProp: (prop) => prop !== 'position' })(
        ({ theme, position }) => ({
            position: "fixed",
            top: position?.y,
            left: position?.x,
            zIndex: 1500,
            backgroundColor: theme.palette.primary.main,
            border: "5px ridge",
            borderColor: theme.palette.primary.light,
            borderRadius: "5px",

            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "calc(60px * 4.5)",
            alignItems: "center",
            justifyContent: "center",

            opacity: 0,
            animation: `${appearAnimation} .1s ease-in .1s 1 normal forwards`,

            transform: "translateX(-50%)",

            [theme.breakpoints.down('md')]: {
                width: "calc(30px * 5)",
            }
        })
    );

function SelectionDlg(props) {
    const options = Array.apply(0, { length: props.optionsNumber });

    return (props.open ? <>
        <StyledBG onClick={props.onClose} />
        <StyledPanel position={props.position}>
            {options.map((value, idx) =>
                <Orb
                    key={idx}
                    value={idx}
                    onClick={() => props.onSelect(idx)}
                />
            )}

        </StyledPanel>
    </> : null);
}

export default SelectionDlg;