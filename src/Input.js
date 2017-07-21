import React, { Component } from 'react'
import styled from 'styled-components'
import { orderBy } from 'lodash'

class Input extends React.Component {
  constructor() {
    super()

    this.computeFrequency = this.computeFrequency.bind(this)
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
      </section>
    )
  }

  handleFileSelect(e) {
    const { onUpdateFrequency } = this.props

    const file = e.target.files[0]
    // console.log(file)

    const reader = new FileReader()
    reader.onload = function(e) {
      let result = e.target.result.split('\n')
      // console.log(result)
      result = this.computeFrequency(result)
      // console.log(result)
      onUpdateFrequency(result)
    }.bind(this)
    reader.readAsText(file, 'UTF-8')
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

    // console.log(sortedResult)
    return sortedResult
  }
}

const Label = styled.label`
  display: inline-block;
  background-color: #009688;
  padding: 10px;
  color: white;
`

export default Input
