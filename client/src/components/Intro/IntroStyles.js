import styled, { keyframes } from 'styled-components';

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const TextWrapper = styled.div`
    transition: 1000ms 300ms;
`;

const animateLineIn = keyframes`
    to {
        height: 70%;
    }
`;

const animateLineOut = keyframes`
    to {
        height: 0%;
    }
`;

const StyledLine = styled.div`
    height: 0;
    width: 4px;
    background-color: var(--edith-alt);

    &.active {
        animation: ${animateLineIn} 300ms forwards, ${animateLineOut} 300ms 800ms forwards;
    }
`;

export const Line = (props) => (
    <StyledLine className='line' />
);

export const LineContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

const animateButtonIn = keyframes`
    to {
        transform: scale(1);
    }
`;

const animateButtonTextIn = keyframes`
    to {
        opacity: 1;
        transform: translateY(-3px);
    }
`;

export const ButtonText = styled.h2`
    position: relative;
    top: 10px;
    font: 300 calc(1.3vw + 0.50rem) Urbanist; 
    color: var(--edith-darker);
    opacity: 0; 
    transition: 500ms;
    animation: ${animateButtonTextIn} 500ms 2200ms forwards;
`;

export const SVGWrapper = styled.div`
    margin: auto;
    width: calc(0.85vw + 5px);
    height: calc(0.85vw + 5px);
    opacity: 0;
    transform: translateY(calc(1.25vw + 10px));
    transition: 500ms;

    path {
        fill: var(--edith);
        stroke: none;
    }
`;

const animateSVG = keyframes`
    0% {
        transform: translateY(calc(1.25vw + 10px)) translateX(calc(-0.3vw - 1px)) rotate(-90deg);
    }

    50% {
        transform: translateY(calc(2.05vw + 10px)) translateX(calc(-0.3vw - 1px)) rotate(-90deg);
    }

    100% {
        transform: translateY(calc(1.25vw + 10px)) translateX(calc(-0.3vw - 1px)) rotate(-90deg);
    }
`;

export const StartButton = styled.button`
    width: calc(12vw + 2rem);
    height: calc(12vw + 2rem); 
    border-radius: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: var(--edith-alt);
    transform: scale(0);
    animation: ${animateButtonIn} 600ms 1700ms ease-out forwards;
    transition: 500ms;

    &:hover {
        width: calc(12.5vw + 2.5rem);
        height: calc(12.5vw + 2.5rem); 

        & ${ButtonText} {
            font: 300 calc(1.70vw + 0.40rem) Urbanist; 
        }

        & ${SVGWrapper} {
            width: calc(1.25vw + 5px);
            height: calc(1.25vw + 5px);
            opacity: 1;
            transform: translateY(calc(1.25vw + 10px)) translateX(calc(-0.3vw - 1px)) rotate(-90deg);
            animation: ${animateSVG} 1200ms 500ms infinite;
        }
    }

    &.clicked {
        width: 0vw;
        height: 0vw;
        transition: 500ms 500ms ease-in-out;

        & ${ButtonText} {
            color: rgba(0, 0, 0, 0);
            transition: 500ms;
        }
    
        & ${SVGWrapper} {
            opacity: 0;
            transform: translateY(calc(2.25vw + 12px)) translateX(calc(-0.3vw - 1px)) rotate(-90deg);
            transition: 500ms;

            path {
                fill: rgba(0, 0, 0, 0);
                transition: 500ms;
            }
        }
    }
`;