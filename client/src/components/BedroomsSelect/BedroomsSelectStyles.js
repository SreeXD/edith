import styled, { css, keyframes } from 'styled-components'

import Button from '../Button/Button';

const animateSelectIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
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

export const StyledButton = styled(Button)`
    animation: ${animateSelectIn} ${props => 200 + props.duration}ms forwards;
    opacity: 0;
    transform: translateY(20px);

    ${props => props.animOut && css`
        animation: ${animateSelectOut} ${props => (600 - props.duration / 2)}ms forwards;
    `}
`

export const BedroomsSelectWrapper = styled.div`
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 15px;
`;