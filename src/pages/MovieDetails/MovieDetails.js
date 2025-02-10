import tmdbApi from "./../../api/tmdbApi";
import Button from "./../../component/Button/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { useEffect, useState } from "react";
import WatchList from "./../../component/WatchList/WatchList.js";
import CastList from "./../../component/CastList/CastList.js";
import TrailerVideo from "./../../component/TrailerVideo/TrailerVideo";
import Loader from "../../component/Loader/Loader";
const MovieDetails = () => {
  const [items, setItems] = useState({});
  const { id, category } = useParams();
  const [preloader, setPreloader] = useState(true);
  const link = `/${category}/${id}/play`;

  useEffect(() => {
    const getDetail = async () => {
      const params = {};
      try {
        const response = await tmdbApi.detailMovie(category, id, {
          params,
        });
        setItems(response);
        setPreloader(false);
      } catch {
        console.log("error");
      }
    };

    getDetail();
  }, [category, id]);

  return (
    <div>
      {preloader && <Loader />}
      {items && (
        <div
          className=" h-auto mt-1280:h-screen bg-cover bg-center  bg-no-repeat   relative"
          style={{
            backgroundImage: `url(${apiConfig.originalImage(
              items.backdrop_path || items.poster_path
            )})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full overlay overlay-8"></div>
          <div className="block text-white mt-768:flex mx-2 mt-768:mx-10  pt-28">
            <div className="flex-1 shrink block mt-768:hidden mt-1280:block">
              {" "}
              <div
                className="rounded-3xl shadow-card  relative mb-1 h-[440px] w-[300px] bg-cover bg-center  bg-no-repeat  mx-auto"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    items.poster_path
                  )})`,
                }}
              ></div>
            </div>

            <div className="my-auto flex-1 relative py-4">
              <h1 className="text-4xl sm:text-2xl font-bold">
                {items.title || items.name}
              </h1>
              <div className="flex my-4 sm:my-1 flex-wrap">
                {items.genres &&
                  items.genres.map((genre, i) => (
                    <Button
                      key={i}
                      className="mr-2 bg-transparent border text-sm border-white items-center space-x-3 px-4 py-2 rounded-md hover:bg-opacity-60  ease-in-out mt-4 "
                    >
                      {genre.name}
                    </Button>
                  ))}
              </div>
              <p className="mt-5 mb-3 font-medium text-md border-box">
                {items.overview &&
                  items.overview.substring(0, 200).concat(" ...")}
              </p>
              <div className="hidden mt-768:block">
                <h1 className="text-xl sm:hidden">CASTS</h1>
                <CastList category={category} id={id} />
              </div>
              <Link
                to={link}
                className="px-3 xs:px-2  py-2 sm:px-4 sm:py-3 inline-flex items-center bg-red-600 btn__primary xs:space-x-3 rounded shadow-lg overflow-hidden font-semibold tracking-wider hover:opacity-80 mt-2"
              >
                PLAY NOW
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#1a1a1a]">
        <TrailerVideo category={category} id={id} />
        <div className="px-10 pb-4">
          <h1 className="mb-8 font-bold  text-xl"> SIMILAR</h1>
          <WatchList category={category} type="similar" id={id} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
