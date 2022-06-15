import { styled } from '@mui/system';

const WordleKbRow = styled('div')(
    () => ({
        display: "flex",
        width: "100%",
        margin: "8px",
        /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */
        touchAction: "manipulation",
    })
);

export default WordleKbRow;