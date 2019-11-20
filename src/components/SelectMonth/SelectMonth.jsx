import React from 'react'
import PropTypes from 'prop-types'

import { Select } from '../UIKit/Select/Select'

const MONTH_OPTIONS = Array.from(Array(12), (_, index) => {
  const monthNumber = `${index + 1}`.padStart(2, '0')

  return (
    <option
      key={monthNumber}
      value={index}
    >
      {monthNumber}
    </option>
  )
})

export const SelectMonth = (props) => {
  const { label, value, onChange } = props

  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
}
