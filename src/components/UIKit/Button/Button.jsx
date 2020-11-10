import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

export const Button = (props) => {
  const { type } = props

  return (
    <button
      type={type}
      className={classNames('button', props.className)}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
}
