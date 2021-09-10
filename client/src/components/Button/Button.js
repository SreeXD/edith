import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import * as S from './ButtonStyles';

const Button = (props) => {
    return (
        <S.Button {...props}>
            {props.text}
        </S.Button>
    );
}

export default Button;