
const WorkItea = () => {
    return (
        <div className="container mx-auto py-12 px-4 md:px-0">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold">Browse Jobs By Categories</h2>
                <p className="mt-2">Three categories available for the time being. They are Web Development, Graphics Design and <br className="hidden md:block" /> Digital Marketing. Browse them by clicking on the tabs below.</p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Data Mining</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">A JS/CSS user friendly template, perfect for gathering useful information of specifications of mobile phones.</p>
                    </div>
                    <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29907113/pexels-photo-29907113/free-photo-of-cozy-indoor-window-scene-with-aloe-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Survey</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">There is no better way to know the thoughts of those who seek jobs online than to conduct a survey about their insights regarding online outsourcing. </p>
                    </div>
                    <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29907113/pexels-photo-29907113/free-photo-of-cozy-indoor-window-scene-with-aloe-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Research Study</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Download and install a browser extension then evaluate your web browsing experience. A personal questionnaire and demographic survey will appear</p>
                    </div>
                    <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29907113/pexels-photo-29907113/free-photo-of-cozy-indoor-window-scene-with-aloe-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Content Moderation</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">This template simplifies the work on how to identify the age group of a certain person. Ideal also for categorizing products or services like food</p>
                    </div>
                    <img className="object-cover w-full h-48 mt-2" src="https://images.pexels.com/photos/29907113/pexels-photo-29907113/free-photo-of-cozy-indoor-window-scene-with-aloe-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="NIKE AIR" />
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkItea;