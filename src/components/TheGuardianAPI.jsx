import { useContext, useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { AuthContext } from '../Provider/AuthProvider';

const TheGuardianAPI = () => {
  const [data, setData] = useState(null);
  const { selectedSource, searchedText, selectedDate } =
    useContext(AuthContext);

  useEffect(() => {
    getGuardianAPI();
  }, []);

  const getGuardianAPI = async () => {
    try {
      const response = await fetch(
        'https://content.guardianapis.com/search?page=1&q=debate&api-key=6253fd7b-8155-4218-9ecc-39ec0f8162c5',
        {
          method: 'GET',
        }
      );
      if (response.ok) {
        const newData = await response.json();
        console.log(newData.response.results);
        newData && setData(newData.response.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get news according to searched text
  const getGuardianAPISearch = async () => {
    try {
      const response = await fetch(
        `https://content.guardianapis.com/search?page=1&q=${searchedText}&api-key=6253fd7b-8155-4218-9ecc-39ec0f8162c5`,
        {
          method: 'GET',
        }
      );
      if (response.ok) {
        const newData = await response.json();
        console.log(newData.response.results);
        newData && setData(newData.response.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedSource === 'the-guardian' && searchedText) {
      getGuardianAPISearch();
    }
  }, [selectedSource, searchedText]);

    // get news according to searched text
    const getGuardianAPIDate = async () => {
        try {
          const response = await fetch(
            `https://content.guardianapis.com/search?page=1&q=${searchedText}&api-key=6253fd7b-8155-4218-9ecc-39ec0f8162c5`,
            {
              method: 'GET',
            }
          );
          if (response.ok) {
            const newData = await response.json();
            console.log(newData.response.results);
            newData && setData(newData.response.results);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        if (selectedSource === 'the-guardian' && searchedText) {
          getGuardianAPISearch();
        }
      }, [selectedSource, searchedText]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-12">
      {data ? (
        data.map((item, i) => {
          const { webTitle, webUrl, webPublicationDate } = item;
          return (
            <Link
              to={webUrl}
              className="flex flex-col justify-between relative shadow bg-gray-50 min-h-60 lg:min-h-96 hover:scale-95 duration-500"
              key={i}
            >
              <h6 className="p-4 md:p-8 flex items-center text-5xl xl:text-6xl text-theme font-bold gap-4">
                <span className="block w-12 md:w-20 h-[1px] bg-black" />
                {webTitle.charAt(0)}
              </h6>

              <div className="flex flex-col gap-2 bg-white p-6 md:p-8 mr-12 md:mr-20">
                <h2 className="font-bold text-xl md:text-2xl hover:text-theme duration-500 line-clamp-2">
                  {webTitle}
                </h2>
                <p className="text-gray-600 opacity-50 font-medium text-[13px] italic">
                  On {webPublicationDate.split('T')[0]}
                </p>
                {/* <p className="text-gray-500 font-medium line-clamp-4">
                  {description}
                </p> */}
                <div className="flex">
                  <Link
                    to={webUrl}
                    className="border-2 border-black py-1 px-3 font-semibold flex items-center text-sm mt-4"
                  >
                    <FaLink className="mr-2" />
                    Read More
                  </Link>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TheGuardianAPI;
