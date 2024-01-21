import '../App.css';

function Navbar() {
  return (
    <section className="w-full px-8 text-gray-100 font-mono sticky top-0 bg-indigo-900" style={{zIndex: 10000}}>
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl text-violet-100">
        <div className="relative flex flex-col md:flex-row">
            <a href="#_" className="flex items-center mb-5 font-medium text-violet-100 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span className="mx-auto text-xl font-black leading-none text-violet-100 select-none">cs0<span className="text-violet-400">32</span>0</span>
            </a>
        </div>

        <div className="inline-flex items-center ml-5 space-x-10 lg:justify-end text-violet-100 flex-wrap">
            <a href="#course-info" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out hover:text-violet-500">
                Course Info
            </a>
            {/* <a href="#course-info" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out hover:text-violet-500">
                Resources
            </a> */}
            <a href="#assignments" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out hover:text-violet-500">
                Assignments
            </a>
            <a href="#lectures" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out hover:text-violet-500">
                Lectures
            </a>
            <a href="#calendar" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out hover:text-violet-500">
                Hours
            </a>
            <a href="#staff" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out hover:text-violet-500">
                Staff
            </a>
            {/* <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Download Now
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-900 hover:text-gray-600">
              Download Now
            </a> */}
        </div>
    </div>
</section>

  );  
}

export default Navbar;
