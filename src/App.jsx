import { useState } from "react";
import { Cost } from "./components/Costs/Cost";
import { NewCost } from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: '032',
    date: new Date('2023.10.04'),
    name: 'AirPods',
    amount: 7999
  },
  {
    id: '024',
    date: new Date('2023.10.20'),
    name: 'MacBook',
    amount: 27999
  },
  {
    id: '036',
    date: new Date('2024.5.15'),
    name: 'Iphone',
    amount: 15999
  },
  {
    id: '037',
    date: new Date('2023.2.13'),
    name: 'Iphone',
    amount: 15999
  },
]

export const App = () => {
  const [dateCost, setCostDate] = useState(INITIAL_COSTS);

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