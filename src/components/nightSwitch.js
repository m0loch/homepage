import '../css/switch.css';

function NightSwitch() {
    return (
        <div className="switch" onClick={() => document.body.classList.toggle('dark') }>
            <div className="flicker"/>
            <div className="sun"/>
            <div className="moon"/>
        </div>
    );
}

export default NightSwitch;