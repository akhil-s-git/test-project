
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchText ,setOpen, cartTotal}) => {
  return (
    <>
      <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
        <div className="cursor-pointer">
          <Link to="/" className="font-bold text-3xl sm:text-4xl lg:text-4xl ">Logo</Link>
        </div>
    
        <div className="flex">
          <div className=" mt-3 flex justify-center bg-gray-200 h-10 rounded-md sm:pl-2 sm:w-[400px] lg:w-[400px] items-center">
            <input
              className="hidden sm:flex bg-transparent p-2 sm:w-full focus:outline-none text-black "
              placeholder="search.."
              //   value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
          onClick={()=>setOpen(true)}
            className="flex items-center justify-center bg-white p-4 rounded-full"
          >
            <div className="relative scale-70">
              <IoMdCart className="h-8 w-8 text-gray-600" />
              <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
               {cartTotal}
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
