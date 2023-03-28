const api = (() => {
  const BASE_URL = 'https://idnapi.jvalleyserver.net/api';

  async function getNews() {
    const response = await fetch(`${BASE_URL}/blog_read?limit=8`);
    const responseJson = await response.json();
    return responseJson;
  }

  function getCulture() {
    fetch(
      'positions.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((myJson) => {
        const data = myJson;
        return data;
      });
  }
  return {
    getNews,
    getCulture,
  };
})();

export default api;
