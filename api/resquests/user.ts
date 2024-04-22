import client from '../client';

export const fetchUsers = async () => {
  return client
    .get(`/users`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
};
