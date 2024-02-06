import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('Error ');
  }
  return context;
};

export const CategoryProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('kids');

  const value = {
    activeCategory,
    setActiveCategory,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
