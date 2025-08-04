import { Button } from '@mui/material';
import { styled } from '@mui/system';
import ReplayIcon from '@mui/icons-material/Replay';

const ResetButtonInternal = styled(Button)(
    ({ theme }) => ({
        position: "absolute",
        right: "16px",
        margin: "8px auto",
        fontSize: "3vmin",
        backgroundColor: "#F44336",
        color: "#FFFFFF",
        borderRadius: "50%",
        minWidth: "unset",
        minHeight: "unset",
        width: "7vmin",
        height: "7vmin",
        [theme.breakpoints.down('md')]: {
            right: "6px",
            width: theme.components.logoWidthMobile,
            height: theme.components.logoWidthMobile,
        },

        '&:hover': {
            backgroundColor: "#FFFFFF",
            color: "#F44336",
        },
    })
);

function ResetButton(props) {
    return(
        <ResetButtonInternal {...props}>
            <ReplayIcon />
        </ResetButtonInternal>
    );
}

export default ResetButton;