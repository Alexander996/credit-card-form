import React from 'react'
import PropTypes from 'prop-types'

import { Select } from '../UIKit/Select/Select'

const CURRENT_YEAR = new Date().getFullYear()

const YEAR_OPTIONS = Array.from(Array(12), (_, index) => {
  const year = CURRENT_YEAR + index

  return (
    <option
      key={year}
      value={year}
    >
      {year}
    </option>
  )
})

export const SelectYear = (props) => {
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
        Year
      </option>
      {YEAR_OPTIONS}
    </Select>
  )
}

SelectYear.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
