import styled from 'styled-components'

export const ProductContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem;
  gap: 2rem;

  @media (max-width: 700px) {
    margin-top: 6rem;
    gap: 5rem 1rem;
    padding: 0;
  }
`
export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  align-items: center;
  justify-content: start;
  padding: 2rem;
  width: 220px;
  height: 270px;
  background-color: #ffffff;
  /* background-image: url('https://www.transparenttextures.com/patterns/az-subtle.png'); */
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 700px) {
    width: 120px;
    height: 160px;
  }
`

export const ProductInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 9rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    bottom: 8rem;
    img {
      width: 120px;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  max-height: 200px;
  max-width: 220px;
  align-items: center;
  color: #736b6b;

  h2 {
    font-size: 1.27rem;
  }

  @media (max-width: 700px) {
    text-align: center;
    max-width: 100px;
    position: relative;
    bottom: 1rem;

    h2 {
      font-size: 0.875rem;
    }
  }
`

export const Description = styled.span`
  height: 40px;
  position: relative;
  left: 0;
  width: 80%;
  font-weight: 700;
  color: #8c8383;
  font-size: 0.9rem;

  @media (max-width: 700px) {
    font-size: 0.65rem;
  }
`
export const WeightProduct = styled.span`
  font-size: 1.37rem;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`
