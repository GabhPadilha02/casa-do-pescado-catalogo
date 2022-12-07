
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px #1B5785;
  }

  body{
    color: #9D9D9D;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a{
    text-decoration: none;
  }

  a:visited{
    color: #9D9D9D;
  }

  li{
    list-style: none;
  }
`