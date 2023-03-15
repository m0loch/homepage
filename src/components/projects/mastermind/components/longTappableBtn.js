import { useRef } from 'react';

function LongTappableBtn(props) {
    const timerRef = useRef();
    const isLongPress = useRef();
  
    function startPressTimer() {
      isLongPress.current = false;
      timerRef.current = setTimeout(() => {
        isLongPress.current = true;
      }, 500)
    }

    function onTapBegin(e) {
        // Only left clicks
        if (e.button !== 0) {
            return;
        }

        startPressTimer();
    }

    function onTapEnd(e) {
        // Only left clicks
        if (e.button !== 0) {
            return;
        }

        clearTimeout(timerRef.current);

        if (isLongPress.current && props.onLongTap) {
            props.onLongTap(e);
        } else if (props.onTap) {
            props.onTap(e);
        }
    }

    const { onTap, onLongTap, ...rest } = props;

    return (
        <div
            {...rest}
            onMouseDown={onTapBegin}
            onMouseUp={onTapEnd}
            onTouchStart={onTapBegin}
            onTouchEnd={onTapEnd}
        />
    );
}

export default LongTappableBtn;