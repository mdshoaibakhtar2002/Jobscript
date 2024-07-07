import Cookies from 'js-cookie';

export const saveToken = (token) => {
  Cookies.set('jwtToken', token, { expires: 1 });
};

export const getToken = () => {
    return Cookies.get('jwtToken');
  };

export const removeToken = () => {
    Cookies.remove('jwtToken');
  };