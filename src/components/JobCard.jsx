/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { format } from 'date-fns'
const JobCard = ({ job }) => {
  const {
    title,
    deadline,
    category,
    price,
    quantity,
    description,
    _id,
    bid_count,
  } = job || {}
  return (
    <Link
      to={`/job/${_id}`}
      className='w-full max-w-sm px-6 py-12 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {format(new Date(deadline), 'P')}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>{title}</h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description.substring(0, 70)}...
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: ${price}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Total Bids: {bid_count} / {quantity}
        </p>
      </div>

      {/* <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Comic Books</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
        </div>
        <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29907113/pexels-photo-29907113/free-photo-of-cozy-indoor-window-scene-with-aloe-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">Free</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
        </div>
      </div> */}

    </Link>
  )
}

export default JobCard
