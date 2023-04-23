import React, { useEffect/*, useState*/ } from 'react';
import * as PIXI from 'pixi.js';
import { Stage } from '@inlet/react-pixi';

function Solitaire(props) {
    PIXI.utils.skipHello();

    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        PIXI.Loader.shared
            .add('char', `${props.assetsFolder}/cards.json`)
            .load(() => {
            // setLoaded(true);
            });

        return () => PIXI.Loader.shared.reset();
    }, [props])

    return (
        <div style={{position: "relative", margin: "auto", width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center"}}>
                <Stage
                    style={{margin:"auto"}}
                    options={{
                        antialias: false,
                        backgroundAlpha: 1,
                        backgroundColor: 0x303030,
                    }}
                >
                    
                </Stage>
        </div>
    );
}

export default Solitaire;