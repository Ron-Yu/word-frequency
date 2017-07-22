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
          <VocabularyColumn><Title>vocabulary</Title></VocabularyColumn>
          <TimesColumn><Title>times</Title></TimesColumn>
        </Row>
        <section>
          {frequency.map(item => this.renderItem(item))}
        </section>
      </Container>
    )
  }

  renderItem({ vocabulary, times }) {
    return (
      <DataRow key={vocabulary}>
        <VocabularyColumn>{vocabulary}</VocabularyColumn>
        <TimesColumn>{times}</TimesColumn>
      </DataRow>
    )
  }
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  font-weight: bold;
  margin: 0;
`

const Row = styled.section`
  padding: 10px;
  display: flex;
  background-color: #009688;
  color: white;
`

const DataRow = Row.extend`
  color: black;
  transition: all 0.3s;
  &:nth-child(even) {
    background-color: #B2DFDB
  }
  &:nth-child(odd) {
    background-color: #E0F2F1
  }
  &:hover {
    background-color: #00897B;
    color: white;
  }
`

const VocabularyColumn = styled.section`
  flex: 0 0 50%;
`

const TimesColumn = styled.section`
  flex: 0 0 50%;
`

export default Output
