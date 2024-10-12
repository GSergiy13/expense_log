import './cardContainer.scss';

export const CardContainer = (props) => {
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}