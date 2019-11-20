import React from 'react'
import PropTypes from 'prop-types'

import './CardForm.scss'

import { Input } from '../UIKit/Input/Input'
import { Button } from '../UIKit/Button/Button'
import { SelectMonth } from '../SelectMonth/SelectMonth'
import { SelectYear } from '../SelectYear/SelectYear'
import { FormFields } from '../../utils'

export const CardForm = (props) => {
  const { form } = props

  return (
    <div className='card-form'>
      <div className='card-form__row'>
        <Input
          label='Card Number'
          value={form[FormFields.CARD_NUMBER]}
          onChange={(event) => props.setFormValue(FormFields.CARD_NUMBER, event.target.value)}
        />
      </div>
      <div className='card-form__row'>
        <Input
          label='Card Holder'
          value={form[FormFields.CARD_HOLDER]}
          onChange={(event) => props.setFormValue(FormFields.CARD_HOLDER, event.target.value)}
        />
      </div>
      <div className='card-form__row'>
        <div className='card-form__group'>
          <SelectMonth
            label='Expiration Date'
            value={form[FormFields.EXPIRATION_DATE_MONTH]}
            onChange={(event) => props.setFormValue(FormFields.EXPIRATION_DATE_MONTH, event.target.value)}
          />
          <SelectYear
            value={form[FormFields.EXPIRATION_DATE_YEAR]}
            onChange={(event) => props.setFormValue(FormFields.EXPIRATION_DATE_YEAR, event.target.value)}
          />
        </div>
        <div className='card-form__cvv'>
          <Input
            label='CVV'
            value={form[FormFields.CVV]}
            maxLength={3}
            onChange={(event) => props.setFormValue(FormFields.CVV, event.target.value)}
          />
        </div>
      </div>
      <Button className='card-form__button'>
        Submit
      </Button>
    </div>
  )
}

CardForm.propTypes = {
  form: PropTypes.object.isRequired,
  setFormValue: PropTypes.func.isRequired,
}
