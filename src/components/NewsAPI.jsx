import { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const NewsAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getNewsAPI();
  }, []);

  const getNewsAPI = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=09363a00b7ea4f208b54ce2b3235381c',
        {
          method: 'GET',
        }
      );
      if (response.ok) {
        const newData = await response.json();
        console.log(newData.articles);
        newData && setData(newData.articles);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-12">
      {data ? (
        data.map((item, i) => {
          const { title, description, author, url, publishedAt } = item;
          return (
            <Link
              to={url}
              className="flex flex-col justify-between relative shadow bg-gray-50 min-h-60 lg:min-h-96 hover:scale-95 duration-500"
              key={i}
            >
              <h6 className="p-4 md:p-8 flex items-center text-5xl xl:text-6xl text-theme font-bold gap-4">
                <span className="block w-12 md:w-20 h-[1px] bg-black" />
                {title.charAt(0)}
              </h6>

              <div className="flex flex-col gap-2 bg-white p-6 md:p-8 mr-12 md:mr-20">
                <h2 className="font-bold text-xl md:text-2xl hover:text-theme duration-500 line-clamp-2">
                  {title}
                </h2>
                <p className="text-gray-600 opacity-50 font-medium text-[13px] italic">
                  <span>By</span> {author} - On {publishedAt.split('T')[0]}
                </p>
                <p className="text-gray-500 font-medium line-clamp-4">
                  {description}
                </p>
                <div className="flex">
                  <Link
                    to={url}
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

export default NewsAPI;
