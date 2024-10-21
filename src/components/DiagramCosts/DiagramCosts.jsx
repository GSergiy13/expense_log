import { Diagram } from "./Diagram/Diagram";

export const DiagramCosts = ({ dateConst }) => {
  const diagramDateSets = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Fer",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

    for (const cost in dateConst) {
      const getManth = dateConst[cost].date.getMonth();
  
      diagramDateSets[getManth].value += dateConst[cost].amount;
    }

  return <Diagram diagramDate={ diagramDateSets } />
};
