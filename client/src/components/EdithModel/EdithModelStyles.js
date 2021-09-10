import styled, { css, keyframes } from 'styled-components';

const rad = 10;

const animateModelIn = keyframes`
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    } 

    100% {
        top: 0;
        opacity: 1;
        width: calc(${rad}vw + 6rem);
        height: calc(${rad}vw + 6rem);
    }
`;

// i feel so ashamed for doing this
const animateSpeech = keyframes`
    10% {
        transform: scale(1.10);
        box-shadow: 0px 0px 160px 0px var(--edith-glow);
    }

    20% {
        transform: scale(1.02);
        box-shadow: 0px 0px 150px 0px var(--edith-glow);
    }

    30% {
        transform: scale(1.08);
        box-shadow: 0px 0px 170px 0px var(--edith-glow);
    }

    40% {
        transform: scale(1.03);
        box-shadow: 0px 0px 150px 0px var(--edith-glow);
    }

    50% {
        transform: scale(1.10);
        box-shadow: 0px 0px 160px 0px var(--edith-glow);
    }

    60% {
        transform: scale(0.95);
        box-shadow: 0px 0px 150px 0px var(--edith-glow);
    }

    70% {
        transform: scale(1.10);
        box-shadow: 0px 0px 160px 0px var(--edith-glow);
    }

    80% {
        transform: scale(1.03);
        box-shadow: 0px 0px 150px 0px var(--edith-glow);
    }

    90% {
        transform: scale(1.07);
        box-shadow: 0px 0px 170px 0px var(--edith-glow);
    }

    100% {
        transform: scale(1);
        box-shadow: 0px 0px 130px 0px var(--edith-glow);
    }
`;

export const EdithModel = styled.div`
    position: relative;
    top: 0;
    left: 0;
    background: none;
    box-shadow: 0px 0px 130px 0px var(--edith-glow);
    border-radius: 100%;
    width: calc(${rad}vw + 6rem);
    height: calc(${rad}vw + 6rem);
    transition: 500ms linear;

    ${props => props.animating && css`
        width: 0;
        height: 0;
        top: calc(${rad/2}vw + 3rem);
        animation: ${animateModelIn} 500ms 1000ms forwards;
    `}

    ${props => props.speaking && !props.animating && css`
        width: calc(${rad}vw + 6rem);
        height: calc(${rad}vw + 6rem);
        animation: ${animateSpeech} 2000ms infinite;
    `}
`;