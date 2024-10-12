import { CardContainer } from '../../UI/CardContainer/CardContainer';
import { CostDate } from '../CostDate/CostDate';
import './costItem.scss';

export const CostItem = ({date, name, amount}) => {
  return (
    <CardContainer className='cost-item'>

      <CostDate date={date} />

      <div className='cost-item__description'>
        <h2>{name}</h2>

        <div className='cost-item__price'>
          {amount} грн
        </div> 
      </div>
    </CardContainer>
  )
};