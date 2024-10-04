import './Card.css'
import img from '../../assets/project/awslogo.png'

const Card = (props) => {
  return (
    <div className="card-caontainer">
        
        <div className="card-tag-img">
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
           
        </div>
        <div className="card-desc">
           <p>{props.desc}</p>
        </div>
      
    </div>
  )
}

export default Card
