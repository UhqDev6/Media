const api = (() => {
  const BASE_URL = 'https://idnapi.jvalleyserver.net/api';

  async function getNews() {
    const response = await fetch(`${BASE_URL}/blog_read?limit=8`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      console.log(message);
    }

    const {
      query: { rows },
    } = responseJson;
    return rows;
  }

  async function getCareer() {
    const response = await fetch(`${BASE_URL}/job_read?offset=0&limit=6`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }

  async function getPressRelease() {
    const response = await fetch(`${BASE_URL}/pr_read?limit=8`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      console.log(message);
    }

    const {
      query: { rows },
    } = responseJson;

    return rows;
  }

  return {
    getNews,
    getCareer,
    getPressRelease,
  };
})();

export default api;
