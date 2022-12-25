import api from '.';

const mockResponse = 'mockData';
const statusText = 'statusText';

describe('api', () => {
  const mockFetch = <T>(data: T, success: boolean) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() {
        return data;
      },
      ok: success,
      statusText: 'statusText',
    });
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('api 호출에 성공한 경우', () => {
    beforeEach(() => {
      mockFetch(mockResponse, true);
    });

    it('데이터가 반환되어야만 한다', async () => {
      const response = await api<typeof mockResponse>('/test');

      expect(response).toBe(mockResponse);
    });
  });

  context('api 호출에 실패한 경우', () => {
    beforeEach(() => {
      mockFetch(mockResponse, false);
    });

    it('실패한 상태 값이 반환되어야만 한다', async () => {
      const throwErrorApiResponse = () => api<typeof mockResponse>('/test');

      await expect(throwErrorApiResponse).rejects.toThrow(statusText);
    });
  });
});
