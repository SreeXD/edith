import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { animOut, speak, setData } from '../../actions/edith';
import * as S from './LocationSelectStyles';

import locations from '../../objects/locations.json';
import statesJson from '../../objects/states.json';

const states = statesJson.states;

const LocationSelect = (props) => {
    const _animOut = useSelector(store => store.animOut);
    const dispatch = useDispatch();

    const onClick = (e) => {
        const select = document.getElementById('loc-select');

        dispatch(animOut());
        setTimeout(() => {
            dispatch(setData({ location: select.value }));
            dispatch(speak(states[1]));
        }, 700);
    };

    return (
        <S.LocationSelectWrapper>
            <S.LocationSelect id='loc-select' animOut={_animOut}>
                {locations.locations.map((x, i) => (
                    <S.Location key={i} value={x}>
                        {x}
                    </S.Location>
                ))}

            </S.LocationSelect>
            <S.StyledButton onClick={onClick}
                animOut={_animOut}
                margin="0 calc(2vw + 5px)" 
                size="calc(1.5rem + 4.2vw)" 
                fontSize="calc(0.5rem + 0.7vw)" 
                text="Select" />
        </S.LocationSelectWrapper>
    )
};

export default LocationSelect;