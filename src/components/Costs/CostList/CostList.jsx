import './costList.scss';

import { CostItem } from '../CostItem/CostItem';

export const CostList = ({costs}) =>  {
  
  if (!costs.length) {
    return <h2 className="cost-list__fallback">Розходів в цьому році немає!</h2>
  }

  return (
    <ul className="cost-list">
      {
        costs
          .map((item) => {
            return <CostItem key={item.id} date={item.date} name={item.name} amount={item.amount} />
          })
      }
    </ul>
  )
}