import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

export const Button = (props) => {
  return (
    <button className={classNames('button', props.className)}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
