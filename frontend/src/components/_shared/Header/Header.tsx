import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HeaderContainer, HeaderTitle } from "./styles";

const Header = () => {
    const router = useRouter();
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (url === '/') {
              setShowButton(false);
            } else {
              setShowButton(true);
            }
          };
          router.events.on('routeChangeComplete', handleRouteChange);

          if (router.pathname !== '/') {
            setShowButton(true);
          }

          return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
          };
    }, [router]);

    return <HeaderContainer>
        <HeaderTitle>Rick and Morty</HeaderTitle>
        {showButton ? <Link href="/">&larr; Back to Listings</Link>: null}
    </HeaderContainer>
}

export default Header;