import React from 'react'
import styled from 'styled-components'

import Inputs from './examples/Inputs'
import Radios from './examples/Radios'
import Forms from './examples/Forms'

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>
          @narendras/
          <wbr />
          components
        </h1>
        <p>
          <a href="https://github.com/narendrasss/components">Github</a>
        </p>
        <p>
          Simple reusable react components built mainly for use in personal
          projects.
        </p>
      </Header>
      <Inputs />
      <Radios />
      <Forms />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 3em;

  @media (min-width: 768px) {
    padding: 20vh 0;
    display: grid;
    grid-template-columns: 1fr 30em 1fr;
    > * {
      grid-column: 2 / -2;
    }
  }

  section {
    margin-bottom: 2.5em;
    > * {
      margin-bottom: 1em;
    }
  }
`

const Header = styled.header`
  margin-bottom: 3em;
  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
  }
  p {
    margin-bottom: 1em;
    line-height: 1.6;
  }
`
