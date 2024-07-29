import NewsAPI from '../components/NewsAPI';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import FilterBar from '../components/FilterBar';

const Home = () => {
  const { selectedSource } = useContext(AuthContext);

  useEffect(() => {
    console.log(selectedSource);
  }, [selectedSource]);

  return (
    <div className="relative py-8">
      <div className="container">
        <h4 className="text-center font-protest font-bold text-3xl md:text-4xl uppercase mb-12">
          News Aggregator
        </h4>

        {/* filter bar */}
        <FilterBar />
        {/* news grid */}
        <NewsAPI />
      </div>
    </div>
  );
};

export default Home;
