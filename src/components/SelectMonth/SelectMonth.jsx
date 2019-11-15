import React from 'react'
import PropTypes from 'prop-types'

import { Select } from '../UIKit/Select/Select'

const MONTH_OPTIONS = Array.from(Array(12), (_, index) => {
  const monthNumber = `0${index + 1}`.slice(-2)

  return (
    <option
      key={monthNumber}
      value={monthNumber}
    >
      {monthNumber}
    </option>
  )
})

export const SelectMonth = (props) => {
  const { label } = props

  return (
    <Select
      label={label}
      defaultValue=''
    >
      <option
        value=''
        disabled
      >
        Month
      </option>
      {MONTH_OPTIONS}
    </Select>
  )
}

SelectMonth.propTypes = {
  label: PropTypes.string,
}
