import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { activate, greet } from '../../actions/edith';
import IntroText from '../IntroText/IntroText';
import * as S from './IntroStyles';

const Intro = () => {
    const [state, setState] = useState(1);
    const dispatch = useDispatch();

    const slide = () => {
        document.querySelector('#tw1').style.transform = 'translateX(-100vw)';
        document.querySelector('#tw2').style.transform = 'translateX(+100vw)';
        
        for (const x of document.getElementsByClassName('line')) 
            x.classList.add('active');
    };

    useEffect(() => {
        setTimeout(() => {
            slide();
            setTimeout(() => setState(2), 1200);
        }, 3700);
    }, []);

    const onClick = (e) => {
        const btn = document.querySelector('#start-button');
        btn.classList.add('clicked');

        setTimeout(() => {
            slide();
            setTimeout(() => {
                document.querySelector('#app').classList.add('animate-out');
                dispatch(activate());
                setTimeout(() => dispatch(greet()), 1600);
            }, 1200);
        }, 800);
    };

    return (
        <S.Intro>
            { state == 1 && 
                <S.LineContainer>
                    <S.Line />
                    <div style={{margin: "5vw"}}>
                        <S.TextWrapper id={"tw1"}>
                            <IntroText content="From Bangalore?" 
                                delay={1000} 
                                delayOffset={30} 
                                fontSize="calc(6.5vw + 0.8rem)" 
                                lineHeight={5} 
                                color={'var(--edith-alt)'} />
                        </S.TextWrapper>

                        <S.TextWrapper id={"tw2"}>
                            <IntroText content="Curious how much a house will cost you?" 
                                delay={2200} 
                                delayOffset={15} 
                                fontSize="calc(3.8vw + 0.12rem)" 
                                lineHeight={4} 
                                color={'var(--edith-alt)'} />
                        </S.TextWrapper>
                    </div>
                    <S.Line />
                </S.LineContainer>
            }

            { state == 2 && 
                <React.Fragment>
                    <S.LineContainer>
                        <S.Line />
                            <div style={{margin: "30px 5vw"}}>
                            <S.TextWrapper id={"tw1"}>
                                <IntroText content="I'm Edith" 
                                    delay={0} 
                                    delayOffset={20} 
                                    fontSize="calc(7.5vw + 0.8rem)" 
                                    lineHeight={5} 
                                    color={'var(--edith-alt)'} />
                            </S.TextWrapper>

                            <S.TextWrapper id={"tw2"}>
                                <IntroText 
                                    content="Here to help!" 
                                    delay={1000} 
                                    delayOffset={20} 
                                    fontSize="calc(5vw + 0.65rem)" 
                                    lineHeight={4} 
                                    color={'var(--edith-alt)'}/>
                            </S.TextWrapper>
                        </div>
                        <S.Line />

                    </S.LineContainer>

                    <S.StartButton id='start-button' onClick={onClick}>
                        <S.ButtonText>
                            Lets go
                        </S.ButtonText>

                        <S.SVGWrapper>
                            <svg viewBox="0 0 11 20" version="1.1">
                                <title>arrow_forward_ios</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Icons" stroke="none" fill="none">
                                    <g id="Rounded" transform="translate(-345.000000, -3434.000000)">
                                        <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                                            <g id="arrow" transform="translate(238.000000, 54.000000)">
                                                <g>
                                                    <polygon id="Path" opacity="0.87" points="24 24 0 24 0 0 24 0"></polygon>
                                                    <path d="M7.38,21.01 C7.87,21.5 8.66,21.5 9.15,21.01 L17.46,12.7 C17.85,12.31 17.85,11.68 17.46,11.29 L9.15,2.98 C8.66,2.49 7.87,2.49 7.38,2.98 C6.89,3.47 6.89,4.26 7.38,4.75 L14.62,12 L7.37,19.25 C6.89,19.73 6.89,20.53 7.38,21.01 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </S.SVGWrapper>
                    </S.StartButton>
                </React.Fragment>
            }
        </S.Intro>
    );
};

export default Intro;