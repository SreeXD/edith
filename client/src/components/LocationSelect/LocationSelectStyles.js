import styled, { css, keyframes } from 'styled-components'
import Button from '../Button/Button';

export const Location = styled.option`
    background-color: var(--edith-btn-secondary);
`;

const animateSelectIn = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const animateSelectOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0px);
    }

    to {
        opacity: 0;
        transform: translateY(20px);
    }
`;

export const LocationSelect = styled.select`
    background: var(--edith-btn-secondary);
    width: calc(95px + 16.5vw);
    height: calc(1.5rem + 1.5vw);
    padding: 0 12px;
    border-radius: 25px;
    border: none;
    outline: none;
    color: white;
    font: 300 calc(0.5vw + 0.6rem) Urbanist;
    opacity: 0;
    transform: translateY(20px);
    animation: ${animateSelectIn} 400ms forwards;
    cursor: pointer;

    ${props => props.animOut && css`
        animation: ${animateSelectOut} 400ms forwards;
    `}

    &::-webkit-scrollbar {
        width: 6px;
        background-color: var(--edith-btn-secondary);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--edith-btn);
        border-radius: 6px;
    }
`;

export const LocationSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const StyledButton = styled(Button)`
    animation: ${animateSelectIn} 400ms 150ms forwards;
    opacity: 0;
    transform: translateY(20px);

    ${props => props.animOut && css`
        animation: ${animateSelectOut} 400ms forwards;
    `}
`;