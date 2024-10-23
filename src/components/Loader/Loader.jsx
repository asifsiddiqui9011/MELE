import './Loader.css'
import { FaGear } from "react-icons/fa6";

const Loader = () => {
  return (
    <div className='loader-container'>
          <FaGear className='loader1' style={{textShadow:"2px 2px rgba(0,0,0)"}}/>
          <FaGear className='loader2'/>
    </div>
  )
}

export default Loader
