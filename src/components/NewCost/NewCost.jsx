import { CostForm } from './CostFrom/CostForm';
import './newCost.scss';


export const NewCost = ({onAddCost}) => {
  const onSaveCostData = (costData) => {
    const newDate = {
      ...costData,
      id: Math.random().toString()
    }

    onAddCost(newDate)
  }

  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={onSaveCostData} />
    </div>
  )
}