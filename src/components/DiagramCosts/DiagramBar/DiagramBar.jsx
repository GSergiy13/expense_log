import './DiagramBar.scss';

export const DiagramBar = ({label, maxValue, value}) => {
  let basicHeight = '0%';

  if(value > 0) {
    basicHeight = Math.round(value / maxValue * 100) + '%';
  }

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div className="diagram-bar__fill" style={{height: basicHeight}}></div>
      </div>

      <div className="diagram-bar__label">
        {label}
      </div>
    </div>
  )
}