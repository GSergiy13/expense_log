
import './const.scss'

import { CardContainer } from '../UI/CardContainer/CardContainer';

import { CostFilter } from './CostFilter/CostFilter';
import { useState } from 'react';
import { CostList } from './CostList/CostList';
import { DiagramCosts } from '../DiagramCosts/DiagramCosts';

export const Cost = ({date}) => {
  const [year, setYear] = useState('2024')

  const onChangeYear = (prev) => {
    setYear(prev)
  }

  const filterYearChange = year
    ? date.filter((item) => item.date.getFullYear().toString() === year)
    : date

  return (
    <>
      <CardContainer className='costs'>

        <CostFilter onChangeYear={onChangeYear} valueYear={year} />
        <DiagramCosts dateConst={filterYearChange} />
        <CostList costs={filterYearChange} />

      </CardContainer>
    </>
  )
} 