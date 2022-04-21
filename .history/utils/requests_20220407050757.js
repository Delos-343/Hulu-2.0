const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: '/trending/all/week?api_key=${API_KEY}&language=en-US'
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: '/movie/top_rated/week?api_key=${API_KEY}&language=en-US'
    },
    fetchActionMovies: {
        title: 'Action',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=20'
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=35'
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=27'
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=10749'
    },
    fetchMystery: {
        title: 'Mystery',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=9648'
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=870'
    },
    fetchWestern: {
        title: 'Western',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=37'
    },
    fetchAnimation: {
        title: 'Animation',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=16'
    },
    fetchTV: {
        title: 'TV Series',
        url: '/discover/movie/week?api_key=${API_KEY}&with_genres=10770'
    },
}