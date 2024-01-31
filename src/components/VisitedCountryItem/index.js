import './index.css'

const VisitedCountryItem = props => {
  const {data, onClickRemove} = props
  const {id, name, imageUrl} = data

  const onRemove = () => {
    onClickRemove(id)
  }

  return (
    <li className="visitedItem">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="removeCon">
        <p className="namePara">{name}</p>
        <button type="button" className="removeBtn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
