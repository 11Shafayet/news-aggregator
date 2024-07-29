/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const authInfo = {
    selectedSource,
    setSelectedSource,
    selectedCategory,
    setSelectedCategory,
    selectedDate,
    setSelectedDate,
    selectedSort,
    setSelectedSort,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any,
};
