import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  trending: "trending",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  trending: "trending",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};
const tmdbApi = {
  getTrendingList: (category, params) => {
    const url = `trending/${category}/day`;
    return axiosClient.get(url, params);
  },
  getMovieList: (type, params) => {
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = `tv/${tvType[type]}`;
    return axiosClient.get(url, params);
  },
  searchList: (category, params) => {
    const url = `search/${category}`;
    return axiosClient.get(url, params);
  },
  detailMovie: (category, id, params) => {
    const url = `${category}/${id}`;
    return axiosClient.get(url, params);
  },
  getCredits: (category, id) => {
    const url = `${category}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  getVideo: (category, id) => {
    const url = `${category}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },
  getSimilar: (category, id) => {
    const url = `${category}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  },
  getTVSeasons: (id, season_number) => {
    const url = `tv/${id}/season/${season_number}`;
    return axiosClient.get(url, { params: {} });
  },
};
export default tmdbApi;
