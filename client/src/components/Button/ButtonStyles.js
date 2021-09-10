import styled, { css, keyframes } from 'styled-components'

export const Button = styled.button`
    position: relative;
    left: 0;
    top: 0;
    font: 300 ${props => props.fontSize} Urbanist;
    color: var(--edith-btn-secondary);
    background-color: var(--edith-btn);
    width: ${props => props.size};
    height: ${props => props.size};
    margin: ${props => props.margin};
    outline: none;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: color 350ms;        

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--edith-btn);
        transition: 500ms;
        z-index: -2;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -100%;
        width: 100%;
        height: 100%;
        background-color: var(--edith-btn-secondary);
        border-radius: 85%;
        transition: 500ms;
        z-index: -1;
    }

    &:hover {
        color: var(--edith-btn);

        &:before {
            top: -100%;
        }

        &:after {
            bottom: 0;
            border-radius: 0;
        }
    }
`;