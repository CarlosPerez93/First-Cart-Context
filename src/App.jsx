import { useState } from 'react'
// import './App.css'
import { Home } from './Components/Home/Home'
import './sass/_main.scss'
import { CartProvider } from './Context/CartContext'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App(id) {

  return (

    <CartProvider >
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </CartProvider>
  )
}

export default App
