import BaseDlg from './baseDlg';

export default function MenuDlg(props) {

    const mode = props.state.state === props.activeState ? 'active'
    : (props.state.prevState === props.activeState ? 'hiding'
        : 'hidden');

//    console.log(mode);

    return <BaseDlg {...props} mode={mode}>
        {props.children}
    </BaseDlg>
}
