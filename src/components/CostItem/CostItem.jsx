import './CostItem.scss';

export const CostItem = ({date, name, amount}) => {
  return (
    <div className='cost-item'>
      <div>{new Date(date).toISOString()}</div>

      <div className='cost-item__description'>
        <h2>{name}</h2>

        <div className='cost-item__price'>
          {amount} грн
        </div> 
      </div>
    </div>
  )
};