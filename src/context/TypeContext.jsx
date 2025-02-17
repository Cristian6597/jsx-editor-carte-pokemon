import React, { createContext, useState } from 'react';

// Crea i contesti per il tipo e il nome
export const TypeContext = createContext();
export const NameContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Stato per il tipo
  const [selectedType, setSelectedType] = useState('dark');
  const changeType = (type) => {
    setSelectedType(type);
  };

  // Stato per il nome
  const [name, setName] = useState('');
  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <TypeContext.Provider value={{ selectedType, changeType }}>
      <NameContext.Provider value={{ name, updateName }}>
        {children}
      </NameContext.Provider>
    </TypeContext.Provider>
  );
};
