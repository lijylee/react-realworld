import request from '@/utils/request.js';

const login = user => {
  return request.post('/users/login', {
    'user': user
  });
};

const register = user => {
  return request.post('/users', {
    'user': user
  });
};

const updateUser = user => {
  return request.put('/user', {
    'user': user
  });
};

const getCurrentUser = () => {
  return request.get('/user');
};

export {
  login,
  register,
  updateUser,
  getCurrentUser
};