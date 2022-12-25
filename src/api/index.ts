const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

async function api<T>(url: string): Promise<T> {
  const response = await fetch(`${API_ENDPOINT}${url}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
}

export default api;
