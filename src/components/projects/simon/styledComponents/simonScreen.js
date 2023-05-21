import { styled } from '@mui/system';

const SimonScreenInternal = styled('div')(
    ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-45deg)",
        borderRadius: "50%",
        height: 0,
        width: "46%",
        paddingBottom: "46%",

        display: "flex",
        justifyContent: "center",
    })
);

const SimonText = styled('p')(
    ({ theme }) => ({
        fontSize: "100px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "8vw"
        }
    })
)

function SimonScreen(props) {
    return (
        <SimonScreenInternal
            {...props}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "100%",
                }}
            >
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                    <SimonText>
                        {props.children}
                    </SimonText>
                </div>
            </div>
        </SimonScreenInternal>
    )
}

export default SimonScreen;