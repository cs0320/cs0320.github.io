interface NavbarProps {
  reduceMotion: boolean;
  setReduceMotion: (enabled: boolean) => void;
}

function Navbar({ reduceMotion, setReduceMotion }: NavbarProps) {
  return (
    <nav
      aria-label="Main"
      className="navbar w-full px-8 text-gray-100 font-mono sticky top-0"
      style={{ zIndex: 10000 }}
    >
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a href="/#" className="mx-auto thirtytwo leading-none py-1">
            cs0320
          </a>
        </div>
        <div className="inline-flex items-center ml-5 gap-x-10 gap-y-3 lg:justify-end flex-wrap">
          <a
            href="#course-info"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Course Info
          </a>
          <a
            href="#assignments"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Assignments
          </a>
          <a
            href="#gearups"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Gear-Ups
          </a>
          <a
            href="#lectures"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Lectures
          </a>
          <a
            href="#calendar"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Hours
          </a>
          <a
            href="#forms"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Forms
          </a>
          <a
            href="#staff"
            className="text-base font-medium leading-6 transition duration-150 ease-in-out "
          >
            Staff
          </a>
          <label className="flex items-center space-x-2 cursor-pointer select-none">
            <span className="text-sm">Reduce motion</span>
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
              className="h-6 w-6 accent-[#F5F5DC]"
              aria-label="Reduce motion"
            />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
