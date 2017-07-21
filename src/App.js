import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Output from './Output'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      frequency: null
    }

    this.handleUpdateFrequency = this.handleUpdateFrequency.bind(this)
  }

  render() {
    return (
      <Container>
        <ContainerItem>
          <Input onUpdateFrequency={this.handleUpdateFrequency} />
        </ContainerItem>
        <ContainerItem>
          <Output frequency={this.state.frequency} />
        </ContainerItem>
      </Container>
    )
  }

  handleUpdateFrequency(data) {
    this.setState({
      frequency: data
    })
  }
}

const Container = styled.section`
  width: 800px;
  display: flex;
  margin: 0 auto;
`

const ContainerItem = styled.section`
  flex: 0 0 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export default App
