import "../App.css";

interface NavbarProps {
  animationEnabled: boolean;
  setAnimationEnabled: (enabled: boolean) => void;
}

function Navbar({ animationEnabled, setAnimationEnabled }: NavbarProps) {
  return (
    <section
      className="navbar w-full px-8 text-gray-100 font-mono sticky top-0"
      style={{ zIndex: 10000 }}
    >
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a href="/#" className="mx-auto thirtytwo leading-none">
            cs0320
          </a>
        </div>
        <div className="inline-flex items-center ml-5 space-x-10 lg:justify-end flex-wrap">
          <a
            href="#course-info"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Course Info
          </a>
          <a
            href="#assignments"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Assignments
          </a>
          <a
            href="#gearups"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Gear-Ups
          </a>
          <a
            href="#lectures"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Lectures
          </a>
          <a
            href="#calendar"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Hours
          </a>
          <a
            href="#forms"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Forms
          </a>
          <a
            href="#staff"
            className="text-base font-medium leading-6 whitespace-no-wrap transition duration-150 ease-in-out "
          >
            Staff
          </a>
          {/* Animation toggle slider */}
          <label className="flex items-center space-x-2 ml-6 cursor-pointer select-none">
            <span className="text-sm">Animation</span>
            <input
              type="checkbox"
              checked={animationEnabled}
              onChange={(e) => setAnimationEnabled(e.target.checked)}
              className="h-5 w-5 accent-[#F5F5DC]"
            />
          </label>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
