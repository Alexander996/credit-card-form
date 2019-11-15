import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Select.scss'

export const Select = (props) => {
  const { label, defaultValue } = props

  return (
    <div className={classNames('select__wrapper')}>
      <label className='select__label'>
        {label}
      </label>
      <select
        defaultValue={defaultValue}
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
  className: PropTypes.string,
}
