import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import toast from 'react-hot-toast'

const UpdateJob = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [job, setJob] = useState({})
  useEffect(() => {
    fetchJobData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/job/${id}`
    )
    setJob(data)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const title = form.job_title.value
    const email = form.email.value
    const category = form.category.value
    const price = form.price.value
    const quantity = form.quantity.value
    const description = form.description.value

    const formData = {
      title,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      category,
      price,
      quantity,
      description,
      bid_count: job.bid_count,
    }
    try {
      // 1. make a post request
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-job/${id}`,
        formData
      )
      // 2. Reset form
      form.reset()
      // 3. Show toast and navigate
      toast.success('Data Updated Successfully!!!')
      navigate('/my-posted-jobs')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Job
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Job Title
              </label>
              <input
                id='job_title'
                name='job_title'
                defaultValue={job.title}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Image Upload</label>

              {/* Image Upload Field */}
              <label>
                <input type="file" className='text-sm cursor-pointer w-36 hidden'
                  name='image'
                  id='image'
                  accept='image/*'
                  hidden />
                <div className='border border-gray-300 rounded-md cursor-pointer p-1  px-4 py-2'>
                  Image
                </div>
              </label>
            </div>
            {job.category && (
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 ' htmlFor='category'>
                  Category
                </label>
                <select
                  name='category'
                  id='category'
                  defaultValue={job.category}
                  className='border p-2 rounded-md'
                >
                  <option value='Survey'>Survey</option>
                  <option value='Translation'>Translation</option>
                  <option value='Image Transcription'>Image Transcription</option>
                  <option value='Video Transcription'>Video Transcription</option>
                  <option value='Categorization'>Categorization</option>
                  <option value='Data Annotation'>Data Annotation</option>
                  <option value='Content Moderation - AI'>Content Moderation - AI</option>
                  <option value='Image Tagging'>Image Tagging</option>
                  <option value='Sentiment Analysis'>Sentiment Analysis</option>
                  <option value='Testing'>Testing</option>
                  <option value='Image Quality Rating'>Image Quality Rating</option>
                  <option value='Search Relevance'>Search Relevance</option>
                  <option value='Audio Transcription'>Audio Transcription</option>
                  <option value='Research Study'>Research Study</option>
                  <option value='Data Mining'>Data Mining</option>
                  <option value='Content Moderation'>Content Moderation</option>
                </select>
              </div>
            )}

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Price
              </label>
              <input
                id='price'
                name='price'
                defaultValue={job.price}
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Quantity
              </label>
              <input
                id='price'
                name='quantity'
                defaultValue={job.quantity}
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              defaultValue={job.description}
              cols='30'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateJob
