import { Button } from "@mui/material";
import { styled } from '@mui/system';

const StyledMenuButton = styled(Button)(
    () => ({
        margin: "8px auto",
        fontSize: "3vmin",
    })
);

export default function MenuButton(props) {
    return (
        <StyledMenuButton
            variant="contained"
            size="large"
            {...props}
        >
            {props.children}
        </StyledMenuButton>
    );
}
