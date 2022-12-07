import { FacebookLogo, InstagramLogo, List } from 'phosphor-react'
import {
  Check,
  CheckBtn,
  HeaderContainer,
  IconsContainer,
  TextLinksContainer,
} from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Check type="checkbox" id="check" />
        <CheckBtn htmlFor="check">
          <List color="#1B5785" size={32} />
        </CheckBtn>
        <a href="/">
          <img src={Logo} alt="Logo" width={100} />
        </a>
        <TextLinksContainer>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="#categories">Categorias</a>
          </li>
          <li>
            <a href="#products">Produtos</a>
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
      </nav>
    </HeaderContainer>
  )
}
