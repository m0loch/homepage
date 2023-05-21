import { Grid } from "@mui/material";
import { styled } from '@mui/system';

const BaseSimonField = styled('div')(
    ({ theme }) => ({
        margin: "8px auto",
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        touchAction: "pan-down",
        height: 0,
        width: "60%",
        paddingBottom: "60%",

        [theme.breakpoints.down('md')]: {
            width: "90%",
            paddingBottom: "90%",
        }
    })
);

const Rotator = styled(Grid)(
    ({ theme }) => ({
        position: "relative",

        height: 0,
        width: "100%",
        paddingBottom: "100%",        
        transform: "rotate(45deg)",
    })
);

function SimonField(props) {
    return(
        <BaseSimonField {...props}>
            <Rotator container>{props.children}</Rotator>
        </BaseSimonField>
    )
}

export default SimonField;