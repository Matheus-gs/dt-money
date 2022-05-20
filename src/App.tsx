import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)
    const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false)

    return (
        <>
            <GlobalStyle />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
        </>
    )
}
