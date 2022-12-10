import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import {
  Description,
  Model,
  ModelOpen,
  Pics,
  PicsContainer,
  ProductContainer,
  ProductInfosContainer,
  ProductItem,
  TextContainer,
  WeightProduct,
} from './styles'

export function Product() {
  const { filteredProducts } = useContext(AppContext)

  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (url: string) => {
    setTempImgSrc(url)
    setModel(true)
  }

  return (
    <>
      {model ? (
        <ModelOpen onClick={() => setModel(false)}>
          <img src={tempImgSrc} alt="Model" />
          <X onClick={() => setModel(false)} />
        </ModelOpen>
      ) : (
        <Model>
          <img src={tempImgSrc} alt="Model" />
          <X onClick={() => setModel(false)} />
        </Model>
      )}
      <ProductContainer id="products">
        {filteredProducts.map((a: any) => (
          <ProductItem key={a.title}>
            <ProductInfosContainer>
              {a.imageOfProduct.map((i: any) => (
                <PicsContainer key={i.url}>
                  <Pics onClick={() => getImg(i.url)}>
                    <img src={i.url} key={i.url} alt="" />
                  </Pics>
                </PicsContainer>
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
    </>
  )
}
