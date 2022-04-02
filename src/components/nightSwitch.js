import '../css/switch.css';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function NightSwitch() {
    return (
        <div className="switch" onClick={() => document.body.classList.toggle('dark') }>
            <div className="flicker"/>
            <LightModeIcon className="sun"/>
            <DarkModeIcon className="moon"/>
        </div>
    );
}

export default NightSwitch;