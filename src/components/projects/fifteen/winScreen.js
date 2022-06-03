import { styled } from '@mui/system';

const StyledPanel = styled('div')(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "var(--header-background)",
    borderRadius: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    opacity: 0,
    animation: "appear .5s ease-in .5s 1 normal forwards",
}));

export default function WinScreen(props) {
  return(
      <StyledPanel onClick={props.onClick} >
          <h1>VICTORY</h1>
      </StyledPanel>
  );
}
