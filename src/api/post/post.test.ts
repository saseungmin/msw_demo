import FIXTURE_POST from '../../mocks/fixtures/post';

import { getPost, getPosts } from '.';

describe('carClass API', () => {
  context('getPosts', () => {
    it('post 리스트를 반환되어야만 한다', async () => {
      const response = await getPosts();

      expect(response).toEqual([FIXTURE_POST]);
    });
  });

  context('getPost', () => {
    const postId = '1';

    it('post 상세 정보가 반환되어야만 한다', async () => {
      const response = await getPost(postId);

      expect(response).toEqual(FIXTURE_POST);
    });
  });
});
