import work from '../assets/images/icons.svg'
import { FaSearch } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
const HowWork = () => {
    return (
        <div className='py-16 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-white'>
            <div className='flex items-center justify-center gap-4'>
                <h2 className='text-2xl md:text-4xl font-semibold uppercase'>How it’s work?</h2>
                <img className='w-16' src={work} alt="" />
            </div>
            <div className='md:flex md:justify-center md:gap-8 text-center mt-6'>
                <div className='flex flex-col justify-center items-center w-60 border-2 space-y-2 p-6 rounded-lg'>
                    <div className='text-6xl'>
                        <MdAccountCircle></MdAccountCircle>
                    </div>
                    <h3 className='text-2xl font-semibold'>Create Account</h3>
                    <p>It’s very easy to open an account and start your journey.</p>
                </div>
                <div className='flex flex-col justify-center items-center w-60 border-2 space-y-2 p-4 rounded-lg'>
                    <div className='text-6xl'>
                        <ImProfile></ImProfile>
                    </div>
                    <h3 className='text-2xl font-semibold'>Complete Profile</h3>
                    <p>Complete your profile with all the info to get attention of client.</p>
                </div>
                <div className='flex flex-col justify-center items-center w-60 border-2 space-y-2 p-4 rounded-lg'>
                    <div className='text-6xl'>
                        <FaSearch></FaSearch>
                    </div>
                    <h3 className='text-2xl font-semibold'>Apply Jobs</h3>
                    <p>Apply & get your preferable jobs with all the requirements.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWork;