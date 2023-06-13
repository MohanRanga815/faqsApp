// Write your code here.
import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderResult = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="para">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImageActive = () => {
    const {isActive} = this.state
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="btn" type="button" onClick={this.onToggleActive}>
        <img src={image} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-con">
        <div className="question-con">
          <h1 className="head">{questionText}</h1>
          {this.renderImageActive()}
        </div>

        {this.renderResult()}
      </li>
    )
  }
}
export default FaqItem
