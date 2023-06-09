// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, onSearchSuggestion} = props
  const {suggestion} = eachItem

  const onSuggestedItem = () => {
    onSearchSuggestion(suggestion)
  }

  return (
    <li className="list-items">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={onSuggestedItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
