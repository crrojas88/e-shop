import { createContext } from 'react'

export const Context = createContext()

const Cart = ({ children }) => {
    const exposed = {
        test: 'Dooks',
    }
    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export default Cart