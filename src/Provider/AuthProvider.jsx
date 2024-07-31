/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { sources } from '../data/data';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [selectedSource, setSelectedSource] = useState(sources[0].value);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    console.log(selectedSource);
  }, [selectedSource]);

  const authInfo = {
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any,
};
