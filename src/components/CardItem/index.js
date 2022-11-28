// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails, key} = props
  const {title, description, imgUrl, className} = cardDetails
  console.log(key)
  return (
    <li className="card-container cards">
      <div className={className}>
        <h1 className="title1">{title}</h1>
        <p className="description1">{description}</p>
        <div className="img">
          <img src={imgUrl} alt={title} className="image" />
        </div>
      </div>
    </li>
  )
}

export default CardItem
