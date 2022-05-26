import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'

import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
    const { transactions } = useTransactions()

    const deposits = transactions
        .filter(transaction => transaction.type === 'deposit')
        .map(value => value.amount)
        .reduce((prev, curr) => prev + curr, 0)

    const withdraws = transactions
        .filter(transaction => transaction.type === 'withdraw')
        .map(value => value.amount)
        .reduce((prev, curr) => prev + curr, 0)

    const totalAmount = deposits - withdraws

    return (
        <>
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="Entradas" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(deposits)}
                    </strong>
                </div>

                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="Saídas" />
                    </header>
                    <strong>
                        -
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(withdraws)}
                    </strong>
                </div>

                <div className={totalAmount < 0 ? 'HighlightDebtBackground' : 'HighlightBackground'}>
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="Total" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(totalAmount)}
                    </strong>
                </div>
            </Container>
        </>
    )
}
