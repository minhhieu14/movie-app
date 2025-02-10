import HomePage from "./../pages/HomePage/HomePage";
import Catalog from "./../pages/Catalog/Catalog";
import MovieDetails from "./../pages/MovieDetails/MovieDetails";
import PlayMovie from "./../pages/PlayMovie/PlayMovie";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/:category/:id",
    exact: true,
    main: () => <MovieDetails />,
  },
  {
    path: "/:category/:id/play",
    exact: false,
    main: () => <PlayMovie />,
  },
  {
    path: "/:category",
    exact: false,
    main: () => <Catalog />,
  },
];
export default routes;
