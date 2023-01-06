import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  const { token } = useSelector((state) => state.auth).data;
  useEffect(() => {
    if (!token) {
      setIsAuth(true);
    }
  }, [token]);

  return isAuth;
}

export default useAuth;
