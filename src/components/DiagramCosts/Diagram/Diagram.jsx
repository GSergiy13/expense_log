import { DiagramBar } from '../DiagramBar/DiagramBar';
import './Diagram.scss';

export const Diagram = ({diagramDate}) => {
  const maxValueArr = diagramDate.map(item => item.value);
  const maxValue = Math.max(...maxValueArr);

  return(
    <div className="diagram">
      {
        diagramDate.map(item => {
         return <DiagramBar
            key={item.label} 
            label={item.label}
            maxValue={maxValue}
            value={item.value}
          />
        })
      }
    </div>
  )
}