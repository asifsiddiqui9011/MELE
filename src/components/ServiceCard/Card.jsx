import './Card.css'

const Card = (props) => {

  

  return (
    <div className="card-caontainer" >
       
       <div className="card-img" >
            <img src={props.img} alt={props.title} className="card-img"  />  
        </div>
        <h1 >{props.title}</h1>
        <div className="card-desc" style={props.style} >
           <p>{props.desc}</p>
        </div>
        <button className='readmore-btn'>Read More</button>
    </div>
  )
}

export default Card
