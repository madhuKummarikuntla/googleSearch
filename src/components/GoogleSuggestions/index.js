// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  onChangeSearch = event => {
    this.setState({googleSearch: event.target.value})
  }

  onSearchSuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="app-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="sub-con">
          <div className="search-input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              value={googleSearch}
              onChange={this.onChangeSearch}
              className="input"
              placeholder="Search Google"
            />
          </div>
          <ul className="unorderd-con">
            {filteredList.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                key={suggestion.id}
                onSearchSuggestion={this.onSearchSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
