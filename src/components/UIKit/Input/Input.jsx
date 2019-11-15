import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.scss'

export const Input = (props) => {
  const { label, value } = props

  return (
    <div className={classNames('input__wrapper', props.className)}>
      <label className='input__label'>
        {label}
      </label>
      <input
        value={value}
        className='input'
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
}
