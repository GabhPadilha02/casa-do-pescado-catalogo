import { FacebookLogo, InstagramLogo, List, X } from 'phosphor-react'
import {
  Check,
  CheckBtn,
  Close,
  CloseBtn,
  HeaderContainer,
  IconsContainer,
  TextLinksContainer,
} from './styles'
import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export function Header() {
  const { setIsNavbarOpen, isNavbarOpen } = useContext(AppContext)
  return (
    <HeaderContainer>
      <nav>
        <Check
          type="checkbox"
          id="check"
          value={isNavbarOpen}
          onChange={(e) => setIsNavbarOpen(true)}
          checked={isNavbarOpen}
        />
        <CheckBtn htmlFor="check">
          <List color="#1B5785" size={32} />
        </CheckBtn>

        <a href="/">
          <img src={Logo} alt="Logo" width={100} />
        </a>
        <TextLinksContainer>
          <li>
            <a href="/" onChange={(e) => setIsNavbarOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#categories" onClick={(e) => setIsNavbarOpen(false)}>
              Categorias
            </a>
          </li>
          <li>
            <a href="#products" onClick={(e) => setIsNavbarOpen(false)}>
              Produtos
            </a>
          </li>
        </TextLinksContainer>
        <IconsContainer>
          <a
            href="https://www.facebook.com/casadopescadogtba"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <FacebookLogo size={30} weight={'regular'} />
            </li>
          </a>
          <a
            href="https://www.instagram.com/casadopescadogtba/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <InstagramLogo size={30} weight={'regular'} />
            </li>
          </a>
        </IconsContainer>
        {isNavbarOpen === true ? (
          <>
            <Close
              type="checkbox"
              id="close"
              value={isNavbarOpen}
              onChange={(e) => setIsNavbarOpen(false)}
              checked={isNavbarOpen}
            />
            <CloseBtn htmlFor="close">
              <X color="#1B5785" size={32} />
            </CloseBtn>
          </>
        ) : (
          <></>
        )}
      </nav>
    </HeaderContainer>
  )
}
