import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // repeat(3,1fr) === 1fr 1fr 1fr
    gap: 2rem; // Espaçamento entre cada um dos itens do grid

    margin-top: -6.9rem;

    div {
        padding: 1.5rem 2rem;

        border-radius: 0.25rem;

        color: var(--text-title);
        background: var(--shape);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;

            margin-top: 1rem;

            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.HighlightBackground {
            color: #fff;
            background: var(--green);
        }

        &.HighlightDebtBackground {
            color: #fff;
            background: var(--red);
        }
    }
`
