import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

import { Background, BackgroundContainer, SearchInput } from './styles'

export function MainSearchContainer() {
  const { query, setQuery, handleKeyPress } = useContext(AppContext)
  return (
    <BackgroundContainer>
      <Background>
        <h2>
          OS MELHORES FRUTOS DO MAR
          <span>NO ATACADO E VAREJO</span>
        </h2>
        <SearchInput>
          <MagnifyingGlass size={30} />
          <input
            type="search"
            placeholder={'BUSQUE POR PRODUTOS'}
            name="searchProducts"
            id="searchProducts"
            value={query}
            onKeyPress={(event) => handleKeyPress(event)}
            onChange={(e) => setQuery(e.target.value)}
          />
          <a href="#products">
            <button id="searchProducts">BUSCAR</button>
          </a>
        </SearchInput>
      </Background>
    </BackgroundContainer>
  )
}
