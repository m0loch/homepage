import { styled } from '@mui/system';

export const FormContainer = styled('div')(
    () => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
    }),
);

export const FormLabel = styled('input')(
    () => ({
        font: "inherit",
        background: "none",
        border: "0px solid",
        borderRadius: "4px",
        height: "40px",
        flexGrow: 1,
        width: "75%",
    }),
);

export const FormInput = styled('input')(
    () => ({
        font: "inherit",
        background: "none",
        border: "1px solid",
        borderRadius: "4px",
        height: "40px",
        flexGrow: 1,
        textAlign: "center",
    }),
);

export const FormSelector = styled('select')(
    () => ({
        font: "inherit",
        border: "1px solid",
        borderRadius: "4px",
        height: "40px",
        width: "75%",
        textAlign: "center",
        margin: "8px",
    }),
);

export const FormButton = styled('button')(
    () => ({
        alignItems: "center",
        border: "1px solid",
        borderRadius: "25px",
        width: "32px",
        height: "32px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
    })
);

export const FormRow = styled('div')(
    ({ theme }) => ({
        display: "flex",
        alignItems: "center",
        margin: "8px",
        width: "70%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            flexDirection: "column"
        }
    })
);

export const FormColumn = styled('div')(
    ({ theme }) => ({
        display: "flex",
        alignSelf: "flex-start",
        alignItems: "center",
        margin: "8px",
        width: "70%",
        flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            width: "90%",
            alignItems: "baseline"
        }
    })
);
