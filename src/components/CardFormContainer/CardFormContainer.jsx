import React, { useState, useCallback } from 'react'

import './CardformContainer.scss'

import { Card } from '../Card/Card'
import { CardForm } from '../CardForm/CardForm'
import { FormFields } from '../../utils'

export const CardFormContainer = () => {
  const [form, changeForm] = useState({
    [FormFields.CARD_NUMBER]: '',
    [FormFields.CARD_HOLDER]: '',
    [FormFields.EXPIRATION_DATE_MONTH]: '',
    [FormFields.EXPIRATION_DATE_YEAR]: '',
    [FormFields.CVV]: '',
  })

  const setFormValue = useCallback((field, value) => {
    changeForm((prevState) => ({ ...prevState, [field]: value }))
  }, [])

  return (
    <div className='card-form-container'>
      <Card/>
      <CardForm
        form={form}
        setFormValue={setFormValue}
      />
    </div>
  )
}
