import React, { Component } from 'react'
import styled from 'styled-components'

class Output extends React.Component {
  render() {
    const { frequency } = this.props

    if (!frequency) {
      return null
    }

    return (
      <Container>
        <Row>
          <Column><Title>vocabulary</Title></Column>
          <Column><Title>times</Title></Column>
        </Row>
        <section>
          {frequency.map(item => this.renderItem(item))}
        </section>
      </Container>
    )
  }

  renderItem({ vocabulary, times }) {
    return (
      <Row>
        <Column>{vocabulary}</Column>
        <Column>{times}</Column>
      </Row>
    )
  }
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h4`
  font-weight: bold;
  margin: 0;
`

const Row = styled.section`
  display: flex;
  padding: 10px;
`

const Column = styled.section`
  flex: 0 0 50%;
`

export default Output
