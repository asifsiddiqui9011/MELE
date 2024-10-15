import { serviceData } from "../Data/Data"
import Carousel from 'react-multi-carousel';
import { Link } from "react-router-dom";
import Card from "./Card/Card";

const ServiceCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
      
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="pb-5">
    <Carousel responsive={responsive} arrows={true} keyBoardControl={true} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
      {serviceData.map((service,index)=>{
          return(
        <Link to={`/service/${service.id}`} key={index}>  <Card  img={service.image} title={service.title} desc={service.desc}  style={{WebkitLineClamp:4}}/></Link>
          )
      })}
      </Carousel>
    </div>
  )
}

export default ServiceCarousel
