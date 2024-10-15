import "./ServiceBanner.css"
import img from '../../assets/project/bannerImg.jpg'

const ServiceBanner = (props) => {
  return (
    <div className="Service-Banner-Container" style={{backgroundImage:`url(${img})`}}>
       {/* <img src={props.img} alt="" className="service-banner-img" /> */}
       <h1 className="service-tag">{props.title}</h1>
    </div>
  )
}

export default ServiceBanner
