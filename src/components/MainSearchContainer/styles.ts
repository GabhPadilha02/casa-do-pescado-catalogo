import styled from 'styled-components'
import backgroundSearch from '../../assets/backgroundSearch.jpg'

export const BackgroundContainer = styled.div`
  margin-top: 50px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Background = styled.div`
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-image: url(${backgroundSearch});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  border-radius: 50px;
  padding: 2rem;
  color: white;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);

  h2 {
    font-size: 2rem;
    width: 43vw;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 15vh;
    font-weight: 700;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);

    span {
      font-size: 2.6rem;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      font-size: 1.5rem;
      span {
        font-size: 2.2rem;
      }
    }
  }

  @media (max-width: 1000px) {
    height: 40vh;
    gap: 0.5rem;

    h2 {
      font-size: 1rem;
      margin-top: 10vh;
      span {
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 0.875rem;
    }
  }
  @media (max-width: 400px) {
    width: 90vw;
    height: 45vh;
    h2 {
      width: 70vw;
      font-size: 1.2rem;
      margin-top: 1vh;
      span {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-height: 450px) {
    h2 {
      font-size: 1rem;
      span {
        font-size: 1.2rem;
      }
    }
  }
`

export const SearchInput = styled.label`
  display: flex;
  width: 43vw;
  height: 50px;
  background-color: rgba(67, 67, 67, 0.5);
  border-radius: 999px;
  align-items: center;
  justify-content: space-between;

  svg {
    position: relative;
    left: 1rem;
  }

  input {
    position: absolute;
    height: 50px;
    background: none;
    border: none;
    width: 35vw;
    border-radius: 999px;
    padding: 1rem 4rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 700;
    ::placeholder {
      color: #ffffff;
      font-size: 0.875rem;
    }
  }

  button {
    width: 8vw;
    height: 50px;
    border-radius: 999px;
    background-color: white;
    border: none;
    color: #545454;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
  @media (max-width: 870px) {
    height: 40px;
    width: 60vw;

    input {
      height: 40px;
      width: 45vw;
      font-size: 0.6rem;
      ::placeholder {
        font-size: 0.6rem;
      }
    }
    button {
      height: 40px;
      width: 15vw;
      font-size: 0.5rem;
    }
    svg {
      width: 15px;
    }
  }
  @media (max-width: 550px) {
    width: 70vw;
    input {
      width: 50vw;
    }
    button {
      width: 20vw;
    }
  }
  @media (max-width: 550px) {
    input {
      ::placeholder {
        font-size: 0;
      }
    }
  }
`
