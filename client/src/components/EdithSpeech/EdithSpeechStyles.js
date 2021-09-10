import styled, { keyframes } from 'styled-components';

export const SpeechText = styled.p`
    font: 200 calc(1.2vw + 0.7rem) Urbanist;
    color: var(--edith-speech);
    text-align: center;
`;

const animateCursor = keyframes`
    49%  {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const SpeechCursor = styled.span`
    width: 1px;
    height: calc(1.5vw + 0.75rem);
    position: relative;
    top: calc(0.3vw + 3px);
    display: inline-block;
    background-color: var(--edith-speech);
    opacity: 0;
    animation: ${animateCursor} 1200ms 1400ms infinite steps(1, start);
`

export const EdithSpeech = styled.div`
    position: relative;
    top: 0;
    left: 0;
    margin-top: 60px;
    width: 60%;
    transition: 500ms linear;

    @media (max-width: 768px) {
        width: 70%;
    }
`;