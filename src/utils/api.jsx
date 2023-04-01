const api = (() => {
  const BASE_URL = 'https://idnapi.jvalleyserver.net/api';

  async function getNews() {
    const response = await fetch(`${BASE_URL}/blog_read?limit=8`, {
      method: 'GET',
      header: {
        'content-type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  async function getCareer() {
    const response = await fetch(`${BASE_URL}/job_read?offset=0&limit=6`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  return {
    getNews,
    getCareer,
  };
})();

export default api;
