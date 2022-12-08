import styled from 'styled-components'

export const ProductContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  padding: 3rem;
  gap: 3rem;

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
  width: 200px;
  max-height: 260px;
  background-color: #ffffff;
  background-image: url('https://www.transparenttextures.com/patterns/az-subtle.png');
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 700px) {
    width: 150px;
    height: 200px;
  }
`

export const ProductInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 7rem;
  align-items: center;
  justify-content: center;

  img {
    height: 140px;
  }

  @media (max-width: 700px) {
    bottom: 5rem;
    img {
      height: 80px;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  max-height: 200px;
  max-width: 220px;
  text-align: center;
  justify-content: end;
  align-items: center;
  color: #9d9d9d;
  margin-top: 1rem;

  h2 {
    font-size: 1.27rem;
    color: #9d9d9d;
    height: 70px;
  }

  @media (max-width: 700px) {
    text-align: center;
    width: 130px;
    position: relative;
    top: 0rem;

    h2 {
      font-size: 1.2rem;
    }
  }
`

export const Description = styled.span`
  height: 40px;
  position: relative;
  left: 0;
  width: 80%;
  font-weight: 700;
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
