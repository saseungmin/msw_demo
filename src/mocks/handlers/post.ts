import { rest } from 'msw';
import FIXTURE_POST from '../fixtures/post';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

export const getPosts = rest.get(`${API_ENDPOINT}/posts`, async (_, res, ctx) => res(ctx.json([FIXTURE_POST])));

export const getPost = rest.get(`${API_ENDPOINT}/posts/:postId`, async (_, res, ctx) => res(ctx.json(FIXTURE_POST)));
