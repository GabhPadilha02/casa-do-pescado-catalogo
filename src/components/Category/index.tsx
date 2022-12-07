import fish from '../../assets/fish.svg'
import shrimp from '../../assets/shrimp.svg'
import portions from '../../assets/portions.svg'
import { CategoryContainer, RadioContainer } from './styles'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import seaFood from '../../assets/seafood.png'

export function Category() {
  const { setCategoryOption } = useContext(AppContext)

  return (
    <CategoryContainer>
      <h2>Categorias</h2>
      <form action="" id="categories">
        <RadioContainer>
          <label htmlFor="fish">
            <img src={seaFood} alt="Pescados" width={80} />
            <span>Todos</span>
            <input
              type="radio"
              name="category"
              id="all"
              value="all"
              onChange={(e) => {
                setCategoryOption(e.target.value)
              }}
            />
          </label>
        </RadioContainer>
        <RadioContainer>
          <label htmlFor="portions">
            <img src={portions} alt="Porções" width={100} />
            <span>Empanados</span>
            <input
              type="radio"
              name="category"
              id="portions"
              value="portions"
              onChange={(e) => {
                setCategoryOption(e.target.value)
              }}
            />
          </label>
        </RadioContainer>
        <RadioContainer>
          <label htmlFor="shrimp">
            <img src={shrimp} alt="Camarões" width={100} />
            <span>Camarões</span>
            <input
              type="radio"
              name="category"
              id="shrimp"
              value="shrimp"
              onChange={(e) => {
                setCategoryOption(e.target.value)
              }}
            />
          </label>
        </RadioContainer>
        <RadioContainer>
          <label htmlFor="fish">
            <img src={fish} alt="Pescados" width={80} />
            <span>Pescados</span>
            <input
              type="radio"
              name="category"
              id="fish"
              value="fish"
              onChange={(e) => {
                setCategoryOption(e.target.value)
              }}
            />
          </label>
        </RadioContainer>
      </form>
    </CategoryContainer>
  )
}
