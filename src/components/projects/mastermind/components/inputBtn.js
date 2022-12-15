import { Button } from "@mui/material";
import { styled } from '@mui/system';

const StyledButton = styled(Button, {
    shouldForwardProp: (props) => props !== 'disabled'
})(
    ({ theme, disabled }) => ({
        display: "flex",
        backgroundColor: theme.palette.background.card,
        borderRadius: "5px",
        minWidth: "0px",
        width: "60px",
        height: "60px",
        margin: "2px auto",

        opacity: disabled ? 0.5 : 1,

        [theme.breakpoints.down('md')]: {
            width: "30px",
            height: "30px",
        },
    })
);

const StyledBtnText = styled('p')(
    ({ theme }) => ({
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.contrast,

        fontSize: "3vw",
        fontWeight: "bold",
    })
);

function InputBtn(props) {
    return (
        <StyledButton
            disabled={props.disabled}
            onClick={props.disabled ? null : props.onClick}
        >
            <StyledBtnText>↵</StyledBtnText>
        </StyledButton>
    );
}

export default InputBtn;