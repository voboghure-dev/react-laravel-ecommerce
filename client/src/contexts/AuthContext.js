import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  console.log('hi');
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const userInfo = {
    name: 'Tapan',
    email: 'tapan@tapan.com',
  };

  setUser(userInfo);

  const value = {
    user,
  };

  console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
