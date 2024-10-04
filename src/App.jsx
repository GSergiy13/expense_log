import { CostItem } from "./components/CostItem/CostItem"

function App() {
  const dateCost = [
    {
      date: '2024.10.04',
      name: 'AirPods',
      amount: '7 999'
    },
    {
      date: '2024.10.20',
      name: 'MacBook',
      amount: '27 999'
    },
    {
      date: '2024.10.15',
      name: 'Iphone',
      amount: '15 999'
    },
  ];

  return (
    <>
      <h2>Start Pet-project</h2>

      {
        dateCost.map( (item, i) => {
         return <CostItem key={i} date={item.date} name={item.name} amount={item.amount} />
        })
      }
    </>
  )
}

export default App