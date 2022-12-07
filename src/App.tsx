import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { MainSearchContainer } from './components/MainSearchContainer'
import { Category } from './components/Category'
import { Product } from './components/Product'
import { AppContextProvider } from './contexts/AppContext'

export function App() {
  return (
    <AppContextProvider>
      <Header />
      <MainSearchContainer />
      <Category />
      <Product />
      <GlobalStyle />
    </AppContextProvider>
  )
}
