import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as api from '../../api/api';
import { animOut, speak, reset } from '../../actions/edith';
import { StyledButton } from '../LocationSelect/LocationSelectStyles';
import * as S from './PredictionStyles';

import statesJson from '../../objects/states.json';

const states = statesJson.states;

const Prediction = (props) => {
    const edith = useSelector(store => ({ animOut: store.animOut, data: store.data }));
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const res = await api.predict(edith.data);
            const pred = res.data.prediction;
            dispatch(speak(`${states[4]} ${pred.toFixed(1)} lakhs`));
            setLoading(false);
        }

        fetchData();
    }, []);

    const onClick = () => {
        dispatch(animOut());
        setTimeout(() => {
            dispatch(reset());
            dispatch(speak(states[5]));
        }, 700);
    };

    return (
        <React.Fragment>
            {!loading &&
                <S.Prediction>
                    <StyledButton onClick={onClick}
                        animOut={edith.animOut}
                        margin="0 calc(2vw + 5px)" 
                        size="calc(2rem + 6vw)" 
                        fontSize="calc(0.45rem + 0.85vw)" 
                        text="Start over?" />
                </S.Prediction>
            }
        </React.Fragment>
    );
}

export default Prediction;