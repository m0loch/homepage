import { Grid } from "@mui/material";
import { styled } from '@mui/system';
import StyledCell from './styledCell';

const StyledSectionInternal = styled('div', {
    shouldForwardProp: (props) => props !== 'dark'
})(
    ({ theme, dark }) => {
        return ({
            display: "flex",
            flexFlow: "wrap",
            backgroundColor: dark ? theme.palette.background.opaque : theme.palette.background.card,
            color: theme.palette.link,
            alignContent: "center",
            justifyContent: "center",
            height: '100%',
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: theme.palette.link,
        })
    }
);

function StyledSection(props) {
    const style = {
        width: `${100/(props.hCount)}%`,
        height: `${100/(props.vCount)}%`,
    };

    return (
        <Grid item
            key={props.value}
            style={style}
        >
            <StyledSectionInternal>
                {props.section.map((tile, idx) => (
                    <StyledCell
                        key={idx}
                        idx={idx}
                        value={tile.value}
                        base={tile.base}
                        section={props.idx}
                        hCount={props.hCount}
                        vCount={props.vCount}
                        onClick={props.onCellSelected}
                    />
                ))} 
            </StyledSectionInternal>
        </Grid>
    );
}

export default StyledSection;