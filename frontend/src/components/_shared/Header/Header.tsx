import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import { HeaderContainer } from './styles'

const Header = () => {
    const router = useRouter()
    const [show, setShow] = useState(false)

    const hide = useCallback(() => {
        setShow(false)
    }, [setShow])

    useEffect(() => {
        // subscribe
        router.events.on('routeChangeStart', hide)

        // unsubscribe
        return () => router.events.off('routeChangeStart', hide)
    }, [hide, router.events])

    return (
        <HeaderContainer>
            <h1>Rick and Morty</h1>
            {show ? <div>back</div> : null}
        </HeaderContainer>
    )
}

export default Header
