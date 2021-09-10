import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import * as S from './EdithModelStyles';

const Edith = (props) => {
    const [animating, setAnimating] = useState(true);
    const speaking = useSelector(store => store.speaking);

    useEffect(() => 
        setTimeout(() => setAnimating(false), 1500), 
    []);

    return (
        <S.EdithModel id='model' animating={animating} speaking={speaking}/>
    );
};

export default Edith;