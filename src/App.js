import styled, { keyframes, ThemeProvider } from 'styled-components/macro';
import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import logo from './logo.svg';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  header {
    background-color: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${(props) => props.theme.textColor};
  }
  p {
    border: ${(props) => props.theme.border};
    padding: 5px;
  }
  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: ${(props) => props.theme.backgroundColor};
  border: ${(props) => props.theme.border};
  cursor: pointer;
`;

const yellow = {
  backgroundColor: '#EAD052',
  textColor: '#B37300',
  border: '2px solid #B37300',
};

const blue = {
  backgroundColor: '#5266EA',
  textColor: '#051266',
  border: '2px solid #0920B3',
};
function App() {
  const [theme, setTheme] = useState(blue);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <header>
          <img src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          <Button
            onClick={() => setTheme(theme === blue ? yellow : blue)}
            type="button"
          >
            Change color
          </Button>
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
