import { styled } from '@mui/system';

const SpoilerInternal = styled('span')(
    ({ theme }) => ({
        color: theme.palette.link,
        position: 'relative',

        ".tooltip": {
            visibility: 'hidden',
            position: 'absolute',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.card,
            width: '30vw',
            textAlign: 'center',
            borderRadius: '5px',
            padding: '5px 0',
            zIndex: 1,
            top: '120%',
            translate: '-50%',
        },

        ".tooltip::after": {
            content: '""',
            position: 'absolute',
            borderColor: `transparent transparent ${theme.palette.background.card} transparent`,

            bottom: '100%',
            left: '50%',
            translate: '-50%',
            marginLeft: '-5px',
            borderWidth: '5px',
            borderStyle: 'solid',
          },

          "&:hover .tooltip": {
            visibility: 'visible',
          }
          
    })
);

export default function InlineSpoiler(props) {
    return (
        <SpoilerInternal>
            {props.mask}
            <span className="tooltip">{props.children}</span>
        </SpoilerInternal>
    )
}
