import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.scss'

export const Input = (props) => {
  const { label, value, type, maxLength, onChange } = props

  return (
    <div className={classNames('input__wrapper', props.className)}>
      {label &&
        <label className='input__label'>
          {label}
        </label>
      }
      <input
        value={value}
        type={type}
        maxLength={maxLength}
        onChange={onChange}
        className='input'
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
