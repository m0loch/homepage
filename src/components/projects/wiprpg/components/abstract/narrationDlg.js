import { useEffect, useState } from 'react';
import BaseDlg from './baseDlg';
import MenuButton from './menuButton';
import { styled } from '@mui/system';
import { splitText } from '../../../../common/textFunctions';

const StyledContent = styled('div')(
    ({ theme }) => ({
        position: 'relative',
        width: '100%',
        maxHeight: '100%',
        padding: '2.5vw',

        // Style for children
        'p': {
            fontSize: '2rem',
            textShadow: `
                -1px    0 ${theme.palette.primary.textBorder},
                   0  1px ${theme.palette.primary.textBorder},
                 1px    0 ${theme.palette.primary.textBorder},
                   0 -1px ${theme.palette.primary.textBorder}
            `,
        },
    })
);

const NextButton = styled(MenuButton)(
    () => ({
        float: 'right',
    })
);

export default function NarrationDlg(props) {

    // Counter used to have the message trigger only once
    const [ctr, setCtr] = useState(props.state.dialogueTrigger?.visited ? 1 : 0);

    useEffect(() => {
        setCtr(0);
    }, [props.state.dialogueTrigger])

    if (!props.locData) return null;

    const mode = props.state.dialogueTrigger ?
        (ctr > 0 ? 'hiding' : 'active')
        : 'hidden';

    const event = props.locData.getTriggeredEvent(props.state.dialogueTrigger);

    // TODO: add support for choices

    return props.locData && event && (
        <BaseDlg {...props} fullScreen={true} mode={mode}>

            <StyledContent>
                {splitText(event.content)}

                <NextButton
                    variant='contained'
                    onClick={
                        () => {
                            props.locData.setTriggered(props.state.dialogueTrigger);
                            setCtr(val => val + 1);
                        }
                    }
                >
                    Next
                </NextButton>
            </StyledContent>

        </BaseDlg>
    )
}
