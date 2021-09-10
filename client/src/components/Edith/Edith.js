import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
 
import EdithModel from '../EdithModel/EdithModel';
import EdithSpeech from '../EdithSpeech/EdithSpeech';
import LocationSelect from '../LocationSelect/LocationSelect';
import AreaInput from '../AreaInput/AreaInput';
import BedroomsSelect from '../BedroomsSelect/BedroomsSelect';
import Prediction from '../Prediction/Prediction';
import * as S from './EdithStyles';

const Edith = (props) => {
    const store = useSelector(store => ({ activated: store.activated, time: store.time }));
    const activated = store.activated;
    const time = store.time;
    const [ interactive, setInteractive ] = useState(false);

    const onMouseMove = (e) => {
        const elem = document.getElementById('model');
        const bb = elem.getBoundingClientRect();
        const width2 = Math.ceil(bb.width / 2);
        const height2 = Math.ceil(bb.height / 2);
        const xoff = (e.clientX - width2) - elem.offsetLeft;
        const yoff = (e.clientY - height2) - elem.offsetTop;
        elem.style.left = -xoff / 15 + 'px';
        elem.style.top = -yoff / 18 + 'px';

        const speech = document.getElementById('speech');
        speech.style.left = -xoff / 90 + 'px';
        speech.style.top = -yoff / 90 + 'px';
    };

    setTimeout(() => setInteractive(true), 1500);

    let response;
    switch(time) {
        case 1:
            response = <LocationSelect />;
            break;

        case 2:
            response = <AreaInput />;
            break;

        case 3:
            response = <BedroomsSelect mode={0} />;
            break;

        case 4:
            response = <BedroomsSelect mode={1} />;
            break;

        case 5:
            response = <Prediction />
            break;

        default: 
            response = null;
    }

    return (
        <S.Edith onMouseMove={interactive ? onMouseMove : null}>
            {activated &&
                <React.Fragment>
                    <EdithModel />
                    <EdithSpeech />

                    { response && 
                        <S.EdithResponse>
                            {response}
                        </S.EdithResponse>
                    }
                </React.Fragment>
            }

        </S.Edith>
    );
};

export default Edith;