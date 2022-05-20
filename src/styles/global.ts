import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --input-background: #e7e9ee;
        --background: #f0f2f5;
        --shape: #ffffff
    }

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    // font-size padrão: 16px (Desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px -> 16 * 93.75 = 15 (Px)
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px -> 16 * 87.5 = 14 (Px)
        }
    }   

    // REM -> 1rem = font-size

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // Detalha as fontes
    }

    body, input, textarea, button{
            font-family: 'Poppins',sans-serif;
            font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity:0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0,0,0,0.5);

    }

    .react-modal-content{
        
        width: 100%;
        max-width: 576px;
        
        padding: 3rem;

        border-radius: 0.25rem;

        position: relative;

        display: flex;
        flex-direction: column;

        background: var(--background);

    }

    .react-modal-close {
        border: 0;

        position: absolute;
        top: 1.5rem;
        right: 1.5rem;

        background: transparent;

        transition: filter 0.2s ease-in-out;

        &:hover {
            filter: brightness(0.8);
        }
    }
`
