import { CardContainer } from '../../UI/CardContainer/CardContainer';
import './costDate.scss'

export const CostDate = ({date}) => {
  const month = date.toLocaleString('uk-Ua', {
    month: 'long'
  });
  const year = date.getFullYear();
  const day = date.toLocaleString('ua-uk', {
    day: '2-digit'
  });
  
  return (
    <CardContainer className='cost-date'>
      <div className='cost-date__month'>{month}</div>
      <div className='cost-date__year'>{year}</div>
      <div className='cost-date__day'>{day}</div>
    </CardContainer>
  )
}