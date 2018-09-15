const Auth = () => {

  const TOKEN_FIELD = 'authToken';

  const setToken = (token) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.setItem(TOKEN_FIELD, token);
    }
    return false;
  }

  const token = () => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(TOKEN_FIELD);
    }
    return false;
  }

  const deleteToken = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TOKEN_FIELD);
    }
    return false;
  }

  const currentUserExists = () => !!token()

  return {
    token,
    setToken,
    deleteToken,
    currentUserExists,
  };
}

export default Auth();
