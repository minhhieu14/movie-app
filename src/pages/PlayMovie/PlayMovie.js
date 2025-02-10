import tmdbApi from "./../../api/tmdbApi";
import Button from "./../../component/Button/Button";
import Slider from "react-slick";
import { useParams } from "react-router";
import MovieCard from "./../../component/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { embedMovie, embedEpisode } from "../../api/embed";
import WatchList from "../../component/WatchList/WatchList";
import Season from "./../../component/Season/Season";
import Loader from "../../component/Loader/Loader";
function PlayMovie() {
  const [items, setItems] = useState([]);
  const { id, category } = useParams();
  const [overview, setOverview] = useState({});
  const [movieSrc, setMovieSrc] = useState(null);
  const [seasons, setSeason] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const NextBtn = (props) => {
    return (
      <div
        onClick={props.onClick}
        className="opacity-100 mt-1280:opacity-0 group-hover:opacity-100 absolute bottom-0 z-10 transform  right-0 w-full h-8 flex items-center justify-center cursor-pointer rounded hover:opacity-70 duration-300 bg-penetration-5"
      >
        <svg
          className="h-12 w-12 text-red-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    );
  };
  const PrevBtn = (props) => {
    return (
      <div
        onClick={props.onClick}
        className="opacity-100 mt-1280:opacity-0 group-hover:opacity-100 absolute top-0 z-10 transform  left-0 w-full h-8 flex items-center justify-center cursor-pointer rounded hover:opacity-70 duration-300 bg-penetration-5"
      >
        <svg
          className="h-12 w-12 text-red-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 15 12 9 18 15" />
        </svg>
      </div>
    );
  };
  const settings = {
    infinite: true,
    vertical: true,
    centerPadding: 0,
    draggable: true,
    cssEase: "linear",
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,

          speed: 800,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 813,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          pauseOnHover: true,
        },
      },
    ],
  };
  const getMovie = async () => {
    const params = {};
    try {
      const responseType = await tmdbApi.getTrendingList(category, {
        params,
      });
      setItems(responseType.results);
      setPreloader(false);
    } catch {
      console.log("error");
    }
  };
  const getDetail = async () => {
    const params = {};
    try {
      const response = await tmdbApi.detailMovie(category, id, {
        params,
      });
      setSeason(response.seasons);
      setOverview(response);
    } catch {
      console.log("error");
    }
  };
  const getLinks = (season = 1, episode = overview) => {
    if (category === "movie") {
      setMovieSrc(embedMovie(id));
    } else {
      if (episode.episode_number) {
        setMovieSrc(embedEpisode(id, season, episode.episode_number));
      } else {
        setMovieSrc(embedEpisode(id, season, 1));
      }
    }
  };
  useEffect(() => {
    getDetail();
    getMovie();
    getLinks();
  }, [id]);

  return (
    <div className="bg-[#1a1a1a]">
      {preloader && <Loader />}
      <div className="block mt-768:grid mt-1280:grid-cols-5 gap-4 mt-768:grid-cols-4 pt-24">
        <div className="mt-1280:col-span-4 mt-768:col-span-3  mt-768:mx-5 mt-320:mx-2">
          <Video movieSrc={movieSrc} />
          <div>
            {seasons && category === "tv"
              ? seasons.map((season, i) => {
                  if (season.name !== "Specials") {
                    return (
                      <Season key={i} season={season} getLinks={getLinks} />
                    );
                  }
                })
              : ""}
            <h1 className="text-3xl my-4 font-bold">
              {overview.title || overview.name}
            </h1>
            <p className="text-md mt-320:mr-4">{overview.overview}</p>
            <div>Realease Date : {overview.release_date}</div>
            <div className="">
              Vote
              <Button className="ml-2 p-1  bg-yellow-600 text-red-700 rounded-lg">
                {overview.vote_average}
              </Button>
            </div>
            <div className="flex mb-6 flex-wrap">
              {overview.genres &&
                overview.genres.map((genre, i) => (
                  <Button
                    key={i}
                    className="mx-2 bg-transparent border text-sm border-white flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-opacity-60  ease-in-out mt-4 "
                  >
                    {genre.name}
                  </Button>
                ))}
            </div>
          </div>
        </div>
        <div className=" mb-8 mt-768:mx-0 mt-812:mr-2 group mt-320:mx-8 ">
          <h1 className="mb-4 font-bold text-xl ">
            {" "}
            TRENDING {category.toUpperCase()}
          </h1>
          <Slider {...settings} className="h-full-w-full">
            {items.map((item, i) => (
              <MovieCard key={i} category={category} item={item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="pl-6 pb-8 pr-6">
        <h1 className="mb-4 font-bold  text-xl"> SIMILAR</h1>
        <WatchList category={category} type="similar" id={id} />
      </div>
    </div>
  );
}
const Video = (props) => {
  const movieSrc = props.movieSrc;

  return (
    <div
      className="relative w-full duration-200 rounded-md overflow-hidden "
      style={{ paddingBottom: "50%" }}
    >
      <iframe
        src={movieSrc}
        allowFullScreen
        title="video"
        className="rounded-md absolute top-0 left-0 w-full h-full z-10"
      ></iframe>
    </div>
  );
};

export default PlayMovie;
