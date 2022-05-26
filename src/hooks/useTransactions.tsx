import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
    id: number
    title: string
    type: string
    category: string
    amount: number
    createdAt: string
}

// Transaction input vai herdar todos os campos da interface transaction, menos os campos id e createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
// type TransactionInput = Pick<Transaction, 'title' | 'type' | 'category' | 'amount'> // Opção 2

interface TransactionsContextProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[]
    createTransaction: (transactionInput: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })

        const { transaction } = response.data

        setTransactions([...transactions, transaction])
    }

    return (
        <>
            <TransactionsContext.Provider value={{ transactions, createTransaction }}>
                {children}
            </TransactionsContext.Provider>
        </>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    return context;
}
