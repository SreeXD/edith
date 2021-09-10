import styled, { css, keyframes } from 'styled-components'

const animateInputIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(13px);
    }

    to {
        opacity: 1;
        transform: translateY(-7px);
    }
`;

const animateInputOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(-7px);
    }

    to {
        opacity: 0;
        transform: translateY(13px);
    }
`;

export const InputLabel = styled.h4`
    display: inline-block;
    position: relative;
    padding-right: calc(0.33vw + 1px);
    padding-left: calc(0.25vw + 1px);
    left: calc(0.8vw + 3px);
    top: calc(0.3vw + 0.35rem);
    color: var(--edith);
    background-color: var(--edith-alt);
    font: 200 calc(0.5vw + 0.525rem) Urbanist;
    transition: left 300ms;

    ${props => props.focus && css`
        left: calc(50% - 1.2vw - 8px);
        font: 300 calc(0.725vw + 0.425rem) Urbanist;
        transition: left 500ms;
    `}
`;

export const AreaInput = styled.input`
    background: none;
    outline: none;
    border: solid white 1px;
    border-radius: 8px;
    width: calc(13vw + 5rem);
    height: calc(1.5vw + 1.2rem);
    font: 300 calc(0.7vw + 0.4rem) Urbanist;
    color: var(--edith);
    padding-left: 10px;

    &:focus {
        border: solid white 2px;
    }
`;

export const InputContainer = styled.div`
    transform: translateY(-7px);
    animation: ${animateInputIn} 400ms forwards;

    ${props => props.animOut && css`
        animation: ${animateInputOut} 400ms forwards;
    `}
`;

export const AreaInputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;