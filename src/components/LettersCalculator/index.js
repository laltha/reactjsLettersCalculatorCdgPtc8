import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeSearchInput}
                placeholder="Enter the phrase"
                type="text"
                value={searchInput}
              />
            </div>

            <p className="letters-count1">
              No.of letters: {searchInput.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
