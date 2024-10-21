import { useState } from "react";
import { Cost } from "./components/Costs/Cost";
import { NewCost } from "./components/NewCost/NewCost";

export const App = () => {
  const [dateCost, setCostDate] = useState([
    {
      id: '032',
      date: new Date('2024.10.04'),
      name: 'AirPods',
      amount: '7 999'
    },
    {
      id: '024',
      date: new Date('2024.10.20'),
      name: 'MacBook',
      amount: '27 999'
    },
    {
      id: '036',
      date: new Date('2024.10.15'),
      name: 'Iphone',
      amount: '15 999'
    },
  ]);

  const onAddCost = (newCost) => {

    setCostDate((prevState) => {
      return [
        ...prevState,
        newCost
      ]
    })
  }

  return (
    <>
      <NewCost onAddCost={onAddCost} />

      <Cost date={dateCost} />
    </>
  )
}

export default App