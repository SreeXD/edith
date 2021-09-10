import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { animOut, setData, speak, incrErr } from '../../actions/edith';
import { StyledButton } from '../LocationSelect/LocationSelectStyles';
import * as S from './AreaInputStyles';

import statesJson from '../../objects/states.json';

const states = statesJson.states;

const AreaInput = (props) => {
    const _animOut = useSelector(store => store.animOut);
    const dispatch = useDispatch();
    const [state, setState] = useState({ focus: false, area: "" });

    const onClick = () => {
        const area = state.area.trim();
        const areaf = area * 1;

        if (area == "" || isNaN(areaf)) {
            dispatch(speak(states[states.length - 1]));
            dispatch(incrErr());
            return;
        }

        dispatch(setData({ area: areaf }));
        dispatch(animOut());
        setTimeout(() => {
            dispatch(speak(states[2]));
        }, 700);
    };

    return (
        <S.AreaInputWrapper>
            <S.InputContainer animOut={_animOut}>
                <S.InputLabel id='label' focus={state.focus}> 
                    Area
                </S.InputLabel> 

                <br />
                
                <S.AreaInput onFocus={() => setState({...state, focus: true})} 
                    animOut={_animOut}
                    onBlur={() => setState({...state, focus: false})} 
                    onChange={(e) => setState({...state, area: e.target.value})} />
            </S.InputContainer>

            <StyledButton onClick={onClick}
                animOut={_animOut}
                margin="0 calc(2vw + 5px)" 
                size="calc(1.5rem + 4.2vw)" 
                fontSize="calc(0.45rem + 0.85vw)" 
                text="Enter" />
        </S.AreaInputWrapper>
    )
};

export default AreaInput;