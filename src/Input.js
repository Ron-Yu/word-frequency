import React, { Component } from 'react'
import styled from 'styled-components'
import { orderBy } from 'lodash'

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      fileName: ''
    }

    this.computeFrequency = this.computeFrequency.bind(this)
    this.handleFileOnload = this.handleFileOnload.bind(this)
  }

  render() {
    return (
      <section>
        <input
          type="file"
          id="uploadfile"
          name="uploadfile"
          ref={c => (this.input = c)}
          onChange={e => this.handleFileSelect(e)}
          style={{ display: 'none' }}
        />
        <Label for="uploadfile" onClick={() => this.input.click()}>
          Choose your file
        </Label>
        <FileName>{this.state.fileName}</FileName>

      </section>
    )
  }

  handleFileSelect(e) {
    const { onUpdateFrequency } = this.props

    const file = e.target.files[0]
    console.log('file', file)

    this.setState({
      fileName: file.name
    })

    const reader = new FileReader()
    reader.onload = this.handleFileOnload
    reader.readAsText(file, 'UTF-8')
  }

  handleFileOnload(e) {
    const { onUpdateFrequency } = this.props

    let result = e.target.result.split('\n')

    result = this.computeFrequency(result)
    onUpdateFrequency(result)
  }

  computeFrequency(data) {
    const computedResult = {}

    data.forEach(function(item) {
      if (!computedResult[item]) {
        computedResult[item] = 1
      } else {
        computedResult[item]++
      }
    })

    const result = Object.keys(computedResult).map(item => {
      return { vocabulary: item, times: computedResult[item] }
    })

    const sortedResult = orderBy(
      result,
      ['times', 'vocabulary'],
      ['desc', 'asc']
    )

    return sortedResult
  }
}

const FileName = styled.p`
  display: inline-block;
  margin: 0;
  padding: 10px
`

const Label = styled.label`
  display: inline-block;
  background-color: #009688;
  padding: 10px;
  color: white;
  cursor: pointer;
`

export default Input
