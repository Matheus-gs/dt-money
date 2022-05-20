import styled from 'styled-components'

export const Container = styled.section`
    margin-top: 4rem;

    table {
        width: 100%;

        border-spacing: 0 0.5rem;

        th {
            padding: 1rem 2rem;

            font-weight: 400;

            text-align: left;
            line-height: 1.5rem;

            color: var(--text-body);
        }

        td {
            padding: 1rem 2rem;

            border: 0;
            border-radius: 0.25rem;

            color: var(--text-body);
            background: var(--shape);

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`
