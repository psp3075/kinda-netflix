const API_KEY = "a45bf0f70bdf0cc5850ed6b68e17d5d6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&include_adult=false`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&include_adult=false`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&include_adult=false`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&include_adult=false`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&include_adult=false`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&include_adult=false`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&include_adult=false`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&include_adult=false`,
};

export default requests;
