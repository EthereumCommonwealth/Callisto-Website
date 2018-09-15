import Storage from './storage';

const Auth = () => {

  const TOKEN_FIELD = 'authToken';

  const setToken = (token) => { return Storage.set(TOKEN_FIELD, token); }

  const token = () => { return Storage.get(TOKEN_FIELD); }

  const deleteToken = () => { Storage.remove(TOKEN_FIELD); }

  const currentUserExists = () => !!token()

  return {
    token,
    setToken,
    deleteToken,
    currentUserExists,
  };
}

export default Auth();
