import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Select.scss'

export const Select = (props) => {
  const { label, defaultValue, value, onChange } = props

  return (
    <div className={classNames('select__wrapper')}>
      {label &&
        <label className='select__label'>
          {label}
        </label>
      }
      <select
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className='select'
      >
        {props.children}
      </select>
    </div>
  )
}

Select.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
