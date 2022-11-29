import { createContext, useState } from 'react';

export const AuthContext = createContext({
  currentUser: {},
  // candidateUsers: [],
});

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    {
      yearGan: "Gap", 
      yearJi: "Rat",
      monthGan: "Byung",
      monthJi: "Horse",
      dayGan: "Jung",
      dayJi: "Snake",
      hourGan: "Shin",
      hourJi: "Ox",
      genderFortune: "Female",
    }
  ); 

  const value = {
    currentUser: currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;