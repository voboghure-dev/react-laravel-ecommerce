import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);

  async function login(email, password) {
    let data = { email, password };
    const result = await fetch('http://127.0.0.1:8000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });
    const user = await result.json();
    if (result.status === 200) {
      // setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    }

    return result;
  }

  const value = {
    // user,
    // setUser,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
