import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  const logOut = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
    navigate('/user/signin');
  };

  return (
    <AuthContext.Provider value={{ token, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
