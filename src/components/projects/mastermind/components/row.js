import { styled } from '@mui/system';

const Row = styled('div', {
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

export default Row;