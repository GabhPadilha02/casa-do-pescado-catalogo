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
  width: 240px;
  /* max-height: 260px; */
  background-color: #ffffff;
  background-image: url('https://www.transparenttextures.com/patterns/az-subtle.png');
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 700px) {
    width: 180px;
    height: 350px;
  }
`

export const ProductInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  bottom: 7rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    bottom: 5rem;
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
    /* position: relative; */
    top: 0rem;

    h2 {
      font-size: 1.2rem;
    }
  }
`

export const Description = styled.span`
  height: 40px;
  /* position: relative; */
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
export const Pics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-bottom: 12px;

  img {
    height: 140px;
    max-width: 150px;
    /* object-fit: cover; */

    @media (max-width: 700px) {
      img {
        height: 50px;
      }
    }
  }
`

export const Model = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: red;
  transition: opacity 0.4s ease visibility 0.4s ease transform 0.5s ease-in-out;
  display: none;
  opacity: 0;
  transform: scale(0);
  overflow: hidden;

  img {
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
    max-height: 70vh;
    max-width: 90vw;
  }
`

export const ModelOpen = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: visible;
  opacity: 1;
  transform: scale(1);
  top: 0;
  left: 0;

  img {
    max-height: 80vh;
  }

  svg {
    position: fixed;
    top: 10px;
    right: 30px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    cursor: pointer;
  }
`
