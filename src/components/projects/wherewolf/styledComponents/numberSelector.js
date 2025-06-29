import { styled } from '@mui/system';

import {
    Unstable_NumberInput as BaseNumberInput,
//    NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledInputRoot = styled('div')(
    () => ({
        display:"flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
    })
);

const StyledInput = styled('input')(
    () => ({
        font: "inherit",
        background: "none",
        border: 0,
        borderRadius: "4px",
        maxWidth: "30%",
        margin: "0 8px",

        textAlign: "center",
    }),
);

const StyledButton = styled('button')(
    () => ({
        alignItems: "center",
        border: "1px solid",
        borderRadius: "25px",
        width: "32px",
        height: "32px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",

        "&.increment": {
            order: 1,
        }
    }),
);

            <BaseNumberInput
                slots={{
                    root: StyledInputRoot,
                    input: StyledInput,
                    incrementButton: StyledButton,
                    decrementButton: StyledButton,
                }}
                slotProps={{
                    incrementButton: {
                    children: <AddIcon fontSize="small" />,
                    className: 'increment',
                    },
                    decrementButton: {
                    children: <RemoveIcon fontSize="small" />,
                    },
                }}
//                onChange={ev => props.wherewolfSetPlayerCount(ev.target.value)}
                    onChange={ev => console.log(ev.target.value)}
//                {...props}
                // ref={ref}
                // value?
            />