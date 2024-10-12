import './const.scss'

import { CostItem } from "./CostItem/CostItem"

export const Cost = ({date}) => {
  console.log(typeof date);

  return (
    <div className='costs'>
      {
        date.map((item) => {
          return <CostItem key={item.id} date={item.date} name={item.name} amount={item.amount} />
        })
      }
    </div>
  )
} 