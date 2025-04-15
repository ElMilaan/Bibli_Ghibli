import apiConfig from "./apiConfig";

const fetchFilms = async () => {
  try {
    const response = await fetch(`${apiConfig.apiUrl}films`);
    const films = await response.json();
    return films;
  } catch (error) {
    console.error("Error fetching data | ", error);
  }
};

export default fetchFilms;
