import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AtivacaoDesativacaoContextType {
  ativado: boolean;
  toggleAtivacao: () => void;
}

export const AtivacaoDesativacaoContext = createContext<AtivacaoDesativacaoContextType | undefined>(undefined);

export const AtivacaoDesativacaoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ativado, setAtivado] = useState(false);

  const toggleAtivacao = () => {
    setAtivado(!ativado);
  };

  return (
    <AtivacaoDesativacaoContext.Provider value={{ ativado, toggleAtivacao }}>
      {children}
    </AtivacaoDesativacaoContext.Provider>
  );
};

export const useAtivacaoDesativacao = (): AtivacaoDesativacaoContextType => {
  const context = useContext(AtivacaoDesativacaoContext);
  if (context === undefined) {
    throw new Error('useAtivacaoDesativacao must be used within an AtivacaoDesativacaoProvider');
  }
  return context;
};
