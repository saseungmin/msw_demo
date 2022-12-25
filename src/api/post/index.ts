import api from '..';

import { ResponsePost } from './model';

const DEFAULT_PATH = '/posts';

export const getPosts = async () => {
  const response = await api<ResponsePost[]>(`${DEFAULT_PATH}`);

  return response;
};

export const getPost = async (postId: string) => {
  const response = await api<ResponsePost>(
    `${DEFAULT_PATH}/${postId}`,
  );

  return response;
};
