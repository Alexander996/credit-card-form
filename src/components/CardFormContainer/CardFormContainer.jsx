import React from 'react'

import './CardformContainer.scss'

import { Card } from '../Card/Card'
import { CardForm } from '../CardForm/CardForm'

export const CardFormContainer = () => {
  return (
    <div className='card-form-container'>
      <Card/>
      <CardForm/>
    </div>
  )
}
