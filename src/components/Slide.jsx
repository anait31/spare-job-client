/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image, text, description }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[100vh]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center space-y-3'>
          <h1 className='text-3xl font-semibold text-white lg:text-5xl '>
            {text}
          </h1>
          <p className='text-2xl font-semibold text-white'>{description}</p>
          <br />
          <Link to='/jobs'
            className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
          >Start Your Task </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
