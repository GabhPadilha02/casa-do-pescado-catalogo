import {
  createContext,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { useGetProductsQuery } from '../../graphql/generated'

export const AppContext = createContext({} as any)

type MyProviderProps = {
  children: ReactNode
}

export interface IProducts {
  title: string
  subtitle: string
  category: string
  weight: string
  imageOfProduct: {
    id: string
    url: string
  }
}

export function AppContextProvider({ children }: MyProviderProps) {
  const { data } = useGetProductsQuery()

  const [query, setQuery] = useState('')
  const [newProducts, setNewProducts] = useState<IProducts[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([])
  const [categoryOption, setCategoryOption] = useState('')
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  console.log(`category option ${categoryOption}`)

  useEffect(() => {
    if (data && data.products) {
      setNewProducts(data.products as any)
      setFilteredProducts(data.products as any)
    }
  }, [data])
  useEffect(() => filterProducts(), [query, categoryOption])
  useEffect(() => setQuery(''), [categoryOption])
  useEffect(() => setIsNavbarOpen(false), [categoryOption])

  console.log(`query: ${query}`)

  function filterProducts() {
    const newFilteredProducts: IProducts[] = [...newProducts]

    if (query && query.length > 1) {
      return setFilteredProducts(
        newProducts.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    }

    if (categoryOption === 'shrimp') {
      return setFilteredProducts(
        newProducts.filter((product) => product.category === 'Camarao'),
      )
    }

    if (categoryOption === 'fish') {
      return setFilteredProducts(
        newProducts.filter((product) => product.category === 'Pescados'),
      )
    }

    if (categoryOption === 'portions') {
      return setFilteredProducts(
        newProducts.filter((product) => product.category === 'Porcoes'),
      )
    }

    return setFilteredProducts(newFilteredProducts)
  }

  function handleKeyPress(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key === 'Enter') {
      window.location.href = '#products'
    }
  }

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        filteredProducts,
        handleKeyPress,
        setCategoryOption,
        setIsNavbarOpen,
        isNavbarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
