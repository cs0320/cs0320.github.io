import '../App.css';

function Navbar() {
  return (
    <section className="navbar w-full px-8 text-gray-100 font-mono sticky top-0" style={{zIndex: 10000}}>
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
    {/* <img className="icon" src="/pumpkin.png"/> */}
        <div className="relative flex flex-col md:flex-row">
            {/* <span className="mx-auto thirtytwo leading-none ">cs0320</span> */}
            <a href="#" className="mx-auto thirtytwo leading-none">
                cs0320
            </a>
        </div>

        <div className="inline-flex items-center ml-5 space-x-10 lg:justify-end flex-wrap">
            <a href="#course-info" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out ">
                Course Info
            </a>
            <a href="#assignments" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out ">
                Assignments
            </a>
            <a href="#lectures" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out ">
                Lectures
            </a>
            <a href="#calendar" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out ">
                Hours
            </a>
            <a href="#staff" className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out ">
                Staff
            </a>
        </div>
    </div>
</section>

  );  
}

export default Navbar;
