import { FaSearch } from 'react-icons/fa';
import Select from './Select';
import { sources, newsapiCat, newsapiSort } from '/src/data/data';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const FilterBar = () => {
  const {
    selectedSource,
    setSelectedSource,
    selectedCategory,
    setSelectedCategory,
    selectedDate,
    setSelectedDate,
    selectedSort,
    setSelectedSort,
  } = useContext(AuthContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
      {/* filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
        {/* source */}
        <Select
          data={sources}
          name={'sources'}
          id={'sources'}
          placeholder={'Source'}
          value={selectedSource}
          setValue={setSelectedSource}
        />
        {/* category */}
        <Select
          data={newsapiCat}
          name={'newsapicat'}
          id={'newsapicat'}
          placeholder={'Category'}
          value={selectedCategory}
          setValue={setSelectedCategory}
        />
        {/* date */}
        <Select
          data={newsapiCat}
          name={'sources'}
          id={'sources'}
          placeholder={'Date'}
          value={selectedDate}
          setValue={setSelectedDate}
        />
        {/* sort by */}
        <Select
          data={newsapiSort}
          name={'sort'}
          id={'sort'}
          placeholder={'Sort'}
          value={selectedSort}
          setValue={setSelectedSort}
        />
      </div>
      {/* search bar */}

      <div className="flex h-full">
        <input
          type="text"
          placeholder="Search Here....."
          className="border p-2 rounded-s"
        />
        <div className="flex items-center justify-center w-11 rounded-e bg-black text-white">
          <FaSearch className="" />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
