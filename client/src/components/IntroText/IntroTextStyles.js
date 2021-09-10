import styled, { css, keyframes } from "styled-components";

export const Text = styled.div`

`;

const animateCharIn = keyframes`
    to {
        transform: translateY(0);
    }
`;

export const TextChar = styled.span`
    display: inline-block;
    color: ${props => props.color};
    font: 400 ${props => props.fontSize} Urbanist;
    transform: translateY(calc(100% + 2vh));
    animation: ${animateCharIn} 400ms ${props => props.delay + props.delayOffset}ms forwards;
    cursor: default;
`;

const animateLineIn = keyframes`
    to {
        width: 100%;
    }
`;

const animateLineOut = keyframes`
    to {
        width: 0;
    }
`;

export const Line = styled.div`
    margin-top: 5px;
    height: ${props => props.lineHeight}px;
    width: 0%;
    background-color: ${props => props.color};
    animation: ${animateLineIn} 500ms ${props => props.delay}ms forwards, ${animateLineOut} 500ms ${props => props.delayOffset * (props.len + 20) + props.delay}ms forwards;
`;

export const IntroText = styled.div`
    display: inline-block;
    overflow: hidden;
`;