import { Cost } from "./components/Costs/Cost";

export const App = () => {
  const dateCost = [
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
  ];

  return (
    <>
      <h2>Start Pet-project</h2>

      <Cost date={dateCost} />
    </>
  )
}

export default App