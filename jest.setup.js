import server from './src/mocks/server';
import '@testing-library/jest-dom/extend-expect';
import 'jest-plugin-context/setup';
import 'given2/setup';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
