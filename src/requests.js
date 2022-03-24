const API_KEY = '38463021648dff2f639d1f46d657c346';

const requests = {
    fetchTrending: `/trending/all/week?api_key=38463021648dff2f639d1f46d657c346&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=38463021648dff2f639d1f46d657c346&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=38463021648dff2f639d1f46d657c346&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=38463021648dff2f639d1f46d657c346&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=38463021648dff2f639d1f46d657c346&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=38463021648dff2f639d1f46d657c346&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=38463021648dff2f639d1f46d657c346&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=38463021648dff2f639d1f46d657c346&with_genres=99`,
}

export default requests