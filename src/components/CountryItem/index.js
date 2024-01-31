import './index.css'

const CountryItem = props => {
  const {data, onClickVisit} = props
  const {name, id, isVisited} = data

  const customBtn = isVisited ? 'customBtn' : ''

  const onVisit = () => {
    onClickVisit(id)
  }

  return (
    <li className="listItem">
      <p className="listPara">{name}</p>

      {isVisited ? (
        <p className="customPara">Visited</p>
      ) : (
        <button type="button" className="btn" onClick={onVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
