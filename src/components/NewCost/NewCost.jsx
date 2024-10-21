import { useState } from 'react';
import { CostForm } from './CostFrom/CostForm';
import './newCost.scss';
import { Button } from '../UI/Button/Button';


export const NewCost = ({onAddCost}) => {
  const [visibility, setVisibility] = useState(false);

  const onSaveCostData = (costData) => {
    const newDate = {
      ...costData,
      id: Math.random().toString()
    }

    onAddCost(newDate)
  }

  const changeVisibilityHendler = () => setVisibility(true);

  const cancelFormHendler = () => setVisibility(false);

  return (
    <div className='new-cost'>
      {
        visibility ?
          <CostForm onSaveCostData={onSaveCostData} cancelFormHendler={cancelFormHendler}/>
            : <Button hendler={changeVisibilityHendler}>Додати новий розход</Button>
      }
    </div>
  )
}