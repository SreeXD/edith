import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { animOut, setData, speak, incr } from '../../actions/edith';
import * as S from './BedroomsSelectStyles';

import statesJson from '../../objects/states.json';

const states = statesJson.states;

const BedroomsSelect = (props) => {
    const mode = props.mode;
    const _animOut = useSelector(store => store.animOut);
    const dispatch = useDispatch();

    const onClick = (e) => {
        const btn = e.target;

        dispatch(animOut());

        if (!mode) {
            dispatch(setData({ bedrooms: btn.value * 1 }));
            setTimeout(() => dispatch(speak(states[3])), 700);
        }

        else {
            dispatch(setData({ bathrooms: btn.value * 1 }));
            setTimeout(() => dispatch(incr()), 700);
        }
    };

    return (
        <S.BedroomsSelectWrapper>
            {[...Array(8).keys()].map(x => (
                <S.StyledButton key={x}
                    onClick={onClick}
                    animOut={_animOut}
                    margin="0 calc(2vw + 5px)" 
                    size="calc(1.5rem + 3.5vw)" 
                    fontSize="calc(0.45rem + 0.85vw)" 
                    text={`${x+1}`} 
                    value={x+1}
                    duration={100 * x} />
            ))}

        </S.BedroomsSelectWrapper>
    )
};

export default BedroomsSelect;