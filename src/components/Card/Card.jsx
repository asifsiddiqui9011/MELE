import './Card.css'
// import img from '../../assets/project/awslogo.png'
// import cloud from '../../assets/cards/cloud.jpg'
// import app from '../../assets/cards/app.jpg'
// import web from '../../assets/cards/web.jpg'
// import ml from '../../assets/cards/ml.jpg'
// import uiux from '../../assets/cards/uxui.jpg'

const Card = (props) => {

  

  return (
    <div className="card-caontainer" >
       
       <div className="card-img" >
            <img src={props.img} alt="" className="card-img"  />  
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
