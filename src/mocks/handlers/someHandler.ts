import { rest } from 'msw';

/* eslint-disable import/prefer-default-export */
export const getSome = rest.post('/login', (req, res, ctx) => {
  // Persist user's authentication in the session
  sessionStorage.setItem('is-authenticated', 'true');
  return res(
    // Respond with a 200 status code
    ctx.status(200),
  );
});
