const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "723b42ff0876259eb508f2c68775dc0d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
