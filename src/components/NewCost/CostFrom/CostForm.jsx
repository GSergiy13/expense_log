import { useState } from 'react';

import './costFrom.scss';
import { Button } from '../../UI/Button/Button';

export const CostForm = ({onSaveCostData, cancelFormHendler}) => {
  const [costInput, setCost] = useState({
    name: '',
    amount: '',
    date: ''
  });

  const nameChangeHendler = (event) => {
    setCost((prevState) => {
      return {
        ...prevState,
        name: event.target.value
      }
    })
  }

  const amountChangeHendler = (event) => {
    setCost((prevState) => {
      return {
        ...prevState,
        amount: event.target.value
      }
    })
  }

  const dateChangeHendler = (event) => {
    setCost((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value).toString()
      }
    })
  }

  const formSubmitHendler = (event) => {
    event.preventDefault();

    const newCostDate = {
      name: costInput.name,
      amount: costInput.amount,
      date: new Date(costInput.date)
    }

    onSaveCostData(newCostDate);

    cancelFormHendler();

    setCost({
      name: '',
      amount: '',
      date: ''
    });
  }


  return (
    <form onSubmit={formSubmitHendler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="name-cost">Назва</label>
          <input value={costInput.name} onChange={nameChangeHendler} type="text" id='name-cost' placeholder='ATB' />
        </div>
        <div className="new-cost__control">
          <label htmlFor="summ-cost">Сума</label>
          <input value={costInput.amount} onChange={amountChangeHendler} type="number" id='summ-cost' placeholder='1000' />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date-cost">Дата</label>
          <input value={costInput.date} onChange={dateChangeHendler} type="date" id='date-cost' min="2020-01-01" max="2030-01-01" />
        </div>

        <div className="new-cost__actions">
          <Button>Додати розход</Button>

          <Button type='button' hendler={cancelFormHendler}>Відміна</Button>
        </div>
      </div>
    </form>
  )
}