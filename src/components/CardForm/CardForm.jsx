import React  from 'react'

import './CardForm.scss'

import { Input } from '../UIKit/Input/Input'
import { Button } from '../UIKit/Button/Button'
import { SelectMonth } from '../SelectMonth/SelectMonth'
import { SelectYear } from '../SelectYear/SelectYear'

export const CardForm = () => {
  return (
    <div className='card-form'>
      <div className='card-form__row'>
        <Input
          label='Card Number'
        />
      </div>
      <div className='card-form__row'>
        <Input
          label='Card Holder'
        />
      </div>
      <div className='card-form__row'>
        <div className='card-form__group'>
          <SelectMonth
            label='Expiration Date'
          />
          <SelectYear/>
        </div>
        <div className='card-form__cvv'>
          <Input
            label='CVV'
          />
        </div>
      </div>
      <Button className='card-form__button'>
        Submit
      </Button>
    </div>
  )
}
