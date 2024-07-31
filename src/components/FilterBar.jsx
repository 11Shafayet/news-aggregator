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
    searchedText,
    setSearchedText,
  } = useContext(AuthContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
      {/* filters */}
      <div className="flex flex-col sm:flex-row flex-wrap items-end gap-4">
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
        {selectedSource === 'newsapi' && (
          <Select
            data={newsapiCat}
            name={'newsapicat'}
            id={'newsapicat'}
            placeholder={'Category'}
            value={selectedCategory}
            setValue={setSelectedCategory}
          />
        )}
        {/* sort by */}
        <Select
          data={newsapiSort}
          name={'sort'}
          id={'sort'}
          placeholder={'Sort'}
          value={selectedSort}
          setValue={setSelectedSort}
        />
        {/* date */}
        <div className="flex flex-col">
          <label htmlFor="from">From:</label>
          <input
            type="date"
            className="border rounded p-2 h-full"
            value={selectedDate?.from}
            onChange={(e) =>
              setSelectedDate((prev) => ({ ...prev, from: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="to">To:</label>
          <input type="date" className="border rounded p-2 h-full" />
        </div>
      </div>
      {/* search bar */}

      <div className="flex h-full">
        <input
          type="text"
          placeholder="Search Here....."
          className="border p-2 rounded-md"
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
        {/* <div className="flex items-center justify-center w-11 rounded-e bg-black text-white">
          <FaSearch className="" />
        </div> */}
      </div>
    </div>
  );
};

export default FilterBar;
