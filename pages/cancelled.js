import { useEffect } from 'react'
import Page from "../components/styled/Page"
import useCart from '../hooks/useCart'

const Cancelled = () => {
    const { clearCart } = useCart()

    useEffect(() => {
        clearCart()
    }, [])
    
    return (
        <Page>
            <h2>Payment Cancelled!</h2>
            <p>You have not been charged!</p>
        </Page>
    )
}
export default Cancelled