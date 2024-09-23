

const BookNow = () => {
  return (
    <section className="flex items-center justify-center w-full py-10 bg-black bg-opacity-20">
      <div className="text-center max-w-3xl mx-auto px-4 space-y-6">
        
       
        <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight animate-fadeIn">
          We Value Each of Our Customers in Handling Their Projects
        </h2>
        
      
        <p className="text-white text-lg md:text-xl font-light animate-fadeIn delay-100">
          Review Sessions Are Also Provided
        </p>
        
    
        <a 
          href="#contact"
          className="inline-block px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none active:ring-4 focus:ring-blue-300 animate-slideUp delay-200 transition-transform duration-300 transform hover:scale-105"
        >
          Book Now
        </a>
      </div>
    </section> 
  )
}

export default BookNow
