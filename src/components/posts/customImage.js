import { useRef } from 'react';
import { styled } from '@mui/system';

const StyledFigure = styled('figure', {
    shouldForwardProp: (prop) => prop !== 'align' && prop !== 'hasCaption'
})(
    ({ align, hasCaption }) => {
        return ({
        display: "grid",
        marginLeft: align === 'center' ? "auto" : "25px",
        marginRight: align === 'center' ? "auto" : "25px",
        marginBottom: hasCaption ? "0" : "25px",
        float: align,
        maxWidth: align ? "40%" : "100%"
    })}
);

const StyledImg = styled('img')(
    () => ({
        display: 'block',
        width: '100%',

        "&.fullView": {
            position: 'fixed',
            width: "90%",
            height: "auto",
            paddingBottom: "100%",
            left: "5%",
            top: "5%",
            zIndex: 1500,
        }
    })
);

const StyledPanel = styled('div')(
    () => ({
        width: 0,
        height: 0,

        "&.fullView": {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            backgroundColor: 'black',
            opacity: '0.5',
            width: '100%',
            height: '100%',
        }
    })
);

export default function CustomImage(props) {
    const panelRef = useRef(null);

    const zoomImg = e => {
        e.preventDefault();
        panelRef.current.classList.toggle('fullView');
        e.target.classList.toggle('fullView');

        document.body.style.overflow = e.target.classList.contains('fullView') ? "hidden" : "scroll";
    }

    return (
        <StyledFigure align={props.align} hasCaption={props.children !== undefined}>
            <StyledPanel ref={panelRef} onClick={zoomImg}/>
            <StyledImg
                alt={props.alt}
                src={props.src}
                onClick={zoomImg}
            />
            <figcaption style={{ justifySelf: "center" }}>{props.children}</figcaption>
        </StyledFigure>
    )
}
