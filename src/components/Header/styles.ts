import styled from 'styled-components'

export const HeaderContainer = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 120px;
    max-width: 100vw;

    img {
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }

    a {
      transition: all 0.2s ease-in-out;
    }

    a:hover {
      opacity: 0.7;
    }

    a:visited {
      color: #9d9d9d;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 700;
    }
  }
  @media (max-width: 450px) {
    nav {
      justify-content: center;
    }
  }
`
export const TextLinksContainer = styled.ul`
  display: flex;
  gap: 5rem;
  width: 25vw;

  @media (max-width: 952px) {
    gap: 1rem;

    a {
      font-size: 0.7rem;

      span {
        font-size: 0.7rem;
      }
    }
  }
  @media (max-width: 1024px) {
    a {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    width: 100vw;
    height: 80vh;
    background-color: white;
    padding: 20px;
    top: 80px;
    left: -110%;
    transition: all 0.5s;
    li {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      line-height: 0px;
      align-items: center;
    }
    a {
      font-size: 1rem;

      span {
        font-size: 1.2rem;
      }
    }
    a:hover,
    a.active {
      background: none;
    }
  }
`

export const IconsContainer = styled.ul`
  display: flex;
  justify-content: start;
  gap: 1rem;
`

export const Check = styled.input`
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: 880px) {
    &:checked ~ ul {
      left: 0;
    }
  }
`

export const CheckBtn = styled.label`
  display: none;

  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
  }
`
