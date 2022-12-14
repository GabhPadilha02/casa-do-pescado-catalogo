import styled from 'styled-components'

export const CategoryContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  margin-bottom: 10px;

  h2 {
    margin-left: 120px;
    font-size: 1.6rem;
    color: #545454;
  }

  form {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: flex-end;
  }
  @media (max-width: 700px) {
    margin-top: 20px;
    form {
      gap: 2vw;
      max-height: 100px;
    }
    h2 {
      margin-left: 0;
      text-align: center;
      position: relative;
    }
  }
  @media (max-width: 850px) {
    form {
      gap: 1vw;
      padding: 10px 50px;
    }
  }
  @media (max-width: 400px) {
    form {
      gap: 0.5vw;
    }
  }
`

export const RadioContainer = styled.div`
  label {
    cursor: pointer;
    display: flex;
    justify-content: end;
    align-items: center;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    transition: all 0.3s ease-in-out;

    span {
      font-size: 1.2rem;
      color: #545454;
      font-weight: 700;
    }

    &:hover {
      opacity: 70%;
    }
  }

  height: 130px;
  width: 140px;
  position: relative;

  display: flex;
  justify-content: center;
  float: left;

  label input[type='radio'] {
    all: unset;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  label input[type='radio']:checked {
    border-bottom: 3px solid #1b5785;
  }

  @media (max-width: 900px) {
    width: 15vw;
    img {
      width: 40px;
    }
    label {
      width: 15vw;
      span {
        font-size: 0.575rem;
      }
    }
  }
  @media (max-width: 500px) {
    img {
      width: 30px;
    }
    label {
      span {
        font-size: 0.475rem;
      }
    }
  }
`
