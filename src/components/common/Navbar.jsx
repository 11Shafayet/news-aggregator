import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <h4 className="font-protest uppercase font-bold text-xl flex items-center">
            NewsFlow
          </h4>
          {/* api list */}

          <div className="flex justify-center items-center gap-4">
            <h5>News Api</h5>
            <h5>BBC News</h5>
            <h5>New York Times</h5>
          </div>
          {/* search bar */}
          <div className="flex justify-end items-center">
            <div className="flex justify-end max-h-11">
              <input
                type="text"
                className="shadow-inner bg-gray-200 rounded-s py-2 px-4"
                placeholder="Search here..."
              />
              <div className="flex justify-center items-center bg-black text-white cursor-pointer hover:bg-opacity-90 px-4 rounded-r">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
