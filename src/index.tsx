import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Aplicação React JS',
                    type: 'deposit',
                    category: 'Desenvolvimento',
                    amount: 12000,
                    createdAt: new Date('2022-06-24 22:43:12'),
                },
                {
                    id: 2,
                    title: 'Aplicação PHP',
                    type: 'deposit',
                    category: 'Desenvolvimento',
                    amount: 6000,
                    createdAt: new Date('2022-06-24 23:53:12'),
                },
                {
                    id: 3,
                    title: 'Mensalidade faculdade',
                    type: 'withdraw',
                    category: 'Educação',
                    amount: 350,
                    createdAt: new Date('2022-06-25 10:33:42'),
                },
            ],
        })
    },

    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction', data)
        })
    },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
