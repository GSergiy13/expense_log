import './CostFilter.scss';

export const CostFilter = ({onChangeYear, valueYear}) => {
  const yearChangeHandler = (event) => {
    onChangeYear(event.target.value);
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>

        <select value={valueYear} onChange={yearChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  )
}