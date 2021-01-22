import Page from '../components/styled/Page'
import useCart from '../hooks/useCart'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Item = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
    margin-bottom: 1rem;
`
const Ul = styled.ul`
    padding: 0;
`

const Total = styled.p`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.5rem;
`

const Button = styled.button`
    background: linear-gradient(to right, #00b09b, #96c93d);
    font-size: 2rem
    color: inherit;
    outline: none;
    border: none;
    width: 100%;
    padding: 1rem;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

const CancelButton = styled.button`
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    font-size: 2rem
    color: inherit;
    outline: none;
    border: none;
    width: 100%;
    padding: 1rem;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

const Checkout = () => {
    const { cart, total } = useCart()
    const router = useRouter()

    const processPayment = () => {
        // alert("order processed!")
        router.push('/success')
    }

    const cancelPayment = () => {
        router.push('/cancelled')
    }

    return (
        <Page>
            <h2>Checkout</h2>
                {cart.length > 0 ? (
                    <>
                <Ul>
                {cart.map((item) => {
                    return (
                    <Item key={item.id}>
                        <span>{item.qty}x {item.name}</span>
                        <span>${item.price / 100}</span>
                    </Item>
                    )
                })}
            </Ul>
            <Total>
                <span>Total</span>
                <span>${total / 100}</span>
            </Total>
            <Button onClick={processPayment}>Process Payment</Button> &nbsp; <CancelButton onClick={cancelPayment}>Cancel Payment</CancelButton>
            </>
                ) : (
                <p>You don't appear to have any items in your cart!</p>
                )}
        </Page>
    )
}

export default Checkout