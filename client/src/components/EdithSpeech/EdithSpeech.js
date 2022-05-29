import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { idle, incr } from '../../actions/edith';
import * as S from './EdithSpeechStyles';

import statesJson from '../../objects/states.json';

const states = statesJson.states;

const EdithSpeech = (props) => {
    const edith = useSelector(store => ({ text: store.text, time: store.time, errCount: store.errCount }));
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const ref = useRef({ wid: null });
    ref.current.text = text;

    const speak = (text) => {
        var msg = new SpeechSynthesisUtterance();
        var voices = speechSynthesis.getVoices();
        msg.voice = voices[7];
        msg.rate = 1;
        msg.text = text;
        msg.pitch = 1.1;
        speechSynthesis.speak(msg);
    };

    useEffect(() => {
        if (edith.text !== "")
            speak(edith.text);

        clearTimeout(ref.current.wid);

        const writeText = () => {
            const text = ref.current.text;
            const i = text.length;

            if (i == edith.text.length) {   
                if (i != 0) {
                    dispatch(idle());

                    if (edith.text !== states[states.length - 1] && edith.time != 5)
                        setTimeout(() => dispatch(incr()), 500);
                }

                clearTimeout(ref.current.wid);
            }

            else {
                setText(text + edith.text[i]);
                const wid = setTimeout(writeText, (edith.text[i] == '.' ? 200 : 50));
                ref.current = { ...ref.current, wid: wid }; 
            } 
        };

        setText("");
        const wid = setTimeout(writeText, 50);
        ref.current = { ...ref.current, wid: wid }; 

    }, [edith.text, edith.errCount]);

    return (
        <S.EdithSpeech id='speech'>
            <S.SpeechText>
                {text} <S.SpeechCursor />
            </S.SpeechText>
        </S.EdithSpeech>
    );
}

export default EdithSpeech;
