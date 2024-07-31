import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import FilterBar from '../components/FilterBar';
import NewsAPI from '../components/NewsAPI';
import TheGuardianAPI from '../components/TheGuardianAPI';

const Home = () => {
  const { selectedSource } = useContext(AuthContext);

  return (
    <div className="relative py-8">
      <div className="container">
        <h4 className="text-center font-protest font-bold text-3xl md:text-4xl uppercase mb-12">
          News Aggregator
        </h4>

        {/* filter bar */}
        <FilterBar />
        {/* news grid */}
        {selectedSource === 'newsapi' && <NewsAPI />}
        {selectedSource === 'the-guardian' && <TheGuardianAPI />}
        {selectedSource === 'new-york-times' && <NewsAPI />}
        <TheGuardianAPI />
      </div>
    </div>
  );
};

export default Home;
