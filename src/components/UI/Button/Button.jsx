import './button.scss';

export const Button = ({type = 'submit', hendler, children}) => {
  return <button onClick={hendler} type={type}>{children}</button>
}