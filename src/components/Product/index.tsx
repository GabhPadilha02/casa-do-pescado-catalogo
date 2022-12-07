import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import {
  Description,
  ProductContainer,
  ProductInfosContainer,
  ProductItem,
  TextContainer,
  WeightProduct,
} from './styles'

export function Product() {
  const { filteredProducts } = useContext(AppContext)

  return (
    <ProductContainer id="products">
      {filteredProducts.map((a: any) => (
        <ProductItem key={a.title}>
          <ProductInfosContainer>
            {a.imageOfProduct.map((i: any) => (
              <img src={i.url} key={i.url} alt="" width={150} />
            ))}
            <TextContainer>
              <h2 key={a.title}>{a.title}</h2>
              <Description key={a.subtitle}>{a.subtitle}</Description>
              <WeightProduct key={a.weight}>{a.weight}</WeightProduct>
            </TextContainer>
          </ProductInfosContainer>
        </ProductItem>
      ))}
    </ProductContainer>
  )
}
