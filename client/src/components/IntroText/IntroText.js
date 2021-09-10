import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './IntroTextStyles';

const IntroText = (props) => {
    return (
        <S.IntroText>
            <S.Text>
                {props.content.split('').map((c, i) => (
                    <S.TextChar key={i}
                        style={{ margin: (c == ' ' ? '0.8vw' : 'auto') }} 
                        delay={props.delay} 
                        delayOffset={i * props.delayOffset} 
                        color={props.color}
                        fontSize={props.fontSize}> 
                        {c}
                    </S.TextChar>
                ))}
            </S.Text>

            <center>
                <S.Line delay={props.delay} 
                    delayOffset={props.delayOffset} 
                    len={props.content.length} 
                    color={props.color}
                    lineHeight={props.lineHeight}/>
            </center>
        </S.IntroText>
    )
};

export default IntroText;