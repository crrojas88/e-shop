import Link from 'next/link'
import styled from 'styled-components'
import UnstyledLink from './styled/UnstyledLink'
import { FiShoppingCart } from 'react-icons/fi'
import useCart from '../hooks/useCart'
import Image from 'next/image'



const Nav = styled.nav`
    background: white;
    padding: 2rem;

`
const NavContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
`

const ShoppingCart = styled(FiShoppingCart)`
    margin-right: 1rem;

    &:hover {
        cursor: pointer;
    }
`

const Navbar = () => {
    const { openCart } = useCart()

    const handleClick = () => {
        openCart()
    }


    return (
        <Nav>
            <NavContainer>
                <Link href="/">
                    <UnstyledLink><Image src='/alfajor-mama-v2.png' title='Logo' alt='Main Logo' width={100} height={100}/></UnstyledLink>
                </Link>
                <ShoppingCart onClick={handleClick}/>
            </NavContainer>
        </Nav>
    )
}

export default Navbar