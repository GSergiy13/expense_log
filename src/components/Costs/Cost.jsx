
import './const.scss'

import { CardContainer } from '../UI/CardContainer/CardContainer';

import { CostFilter } from './CostFilter/CostFilter';
import { CostItem } from "./CostItem/CostItem"
import { useState } from 'react';

export const Cost = ({date}) => {
  const [year, setYear] = useState('2023')

  const onChangeYear = (prev) => {
    setYear(prev)
  } 

  return (
    <>
      <CardContainer className='costs'>

        <CostFilter onChangeYear={onChangeYear} valueYear={year} />

        {
          date.map((item) => {
            return <CostItem key={item.id} date={item.date} name={item.name} amount={item.amount} />
          })
        }
      </CardContainer>
    </>
  )
} 