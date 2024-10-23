import './Gear.css'
import { FaGear } from "react-icons/fa6";
import Carousel2 from '../Carousel2'
const Gear = () => {
  return (
    <>
        <div className='gear-container'>
          <FaGear className='gear' style={{textShadow:"2px 2px rgba(0,0,0)"}}/>
          <FaGear className='gear2'/>
        </div>
        <div className='card-box'>
          <Carousel2/>

        </div>

    </>
  )
}

export default Gear
