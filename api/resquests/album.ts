import client from '../client';

export const fetchAlbumPhotos = async (albumId: number) => {
  return client
    .get(`/albums/${albumId}/photos`)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
};
