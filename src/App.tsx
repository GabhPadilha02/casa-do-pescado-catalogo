import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { MainSearchContainer } from './components/MainSearchContainer'
import { Category } from './components/Category'
import { Product } from './components/Product'
import { AppContextProvider } from './contexts/AppContext'

export function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <MainSearchContainer />
        <Category />
        <Product />
        <GlobalStyle />
      </ThemeProvider>
    </AppContextProvider>
  )
}
