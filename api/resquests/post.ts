import client from '../client';

export const getPostsByUserId = async (userId: number) => {
  return client
    .get(`/posts?userId=${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
};

export const getPosts = async () => {
  return client
    .get(`/posts`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
};
