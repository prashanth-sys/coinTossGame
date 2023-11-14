// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {image: true}

  onChangeImage = () => {
    this.setState({image: false})
  }

  render() {
    const {image} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {image ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="shiva paravathi"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="shiva paravathi"
              className="image"
            />
          )}
          <button className="button" type="button" onClick={this.onChangeImage}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="description-count">Total: 0</p>
            <p className="description-count">Heads: 0</p>
            <p className="description-count">Tail: 0</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
