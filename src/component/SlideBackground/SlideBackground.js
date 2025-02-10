import { useState, useEffect } from "react";
import Slider from "react-slick";
import tmdbApi, { movieType } from "./../../api/tmdbApi";
import "./SlideBackground.css";
import apiConfig from "../../api/apiConfig";
import Button, { OutlineButton } from "./../Button/Button";
import Loader from "../../component/Loader/Loader";
import { useHistory } from "react-router";
function SlideBackground() {
  const [movieItems, setMovieItems] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    autoplay: true,
    infinite: true,
    pauseOnHover: false,
    swipeToSlide: true,
  };

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(1, 5));
        setPreloader(false);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);
  return (
    <div className=" relative">
      {preloader && <Loader />}
      <Slider {...settings} className="h-full-w-full">
        {movieItems.map((item, i) => (
          <SlideItem key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
}
const lessText = (text) => {
  if (text.length > 300) {
    const str = text.substring(0, 300);
    const content = str.concat(" ...");
    return content;
  }

  return text;
};
const SlideItem = (props) => {
  let hisrory = useHistory();
  const { item } = props;
  const backGround = apiConfig.originalImage(item.backdrop_path);
  return (
    <div
      className="mt-320:h-[570px] mt-1280:h-screen bg-cover bg-center  bg-no-repeat  relative"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full  overlay overlay-8"></div>
      <div className="absolute mt-28 ">
        {" "}
        <div className=" text-white flex mx-10    ">
          <div className="flex-1 hidden mt-768:block get-in">
            {" "}
            <div
              className="rounded-3xl h-[440px] w-[300px] shadow-card bg-cover bg-center  bg-no-repeat mx-auto"
              style={{
                backgroundImage: `url(${apiConfig.w500Image(
                  item.poster_path
                )})`,
              }}
            ></div>
          </div>

          <div className="my-auto flex-1 ">
            <h1 className="text-4xl md:text-6xl sm:text-4xl font-bold get-in--text-1">
              {item.original_title}
            </h1>
            <p className="mt-5 mb-7 text-lg font-medium get-in--text-2">
              {lessText(item.overview)}
            </p>
            <div className="flex get-in--btn">
              <Button
                onClick={() => hisrory.push("/movie/" + item.id + "/play")}
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-opacity-80 text-black bg-white "
              >
                <svg
                  className="h-5 w-5 text-red-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Play
              </Button>
              <OutlineButton
                onClick={() => hisrory.push("/movie/" + item.id)}
                className="mx-2 bg-secondary flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-opacity-80 text-white
                   bg-opacity-60 
                  shadow-lg "
              >
                <svg
                  className="h-4 w-4 text-red-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <circle cx="12" cy="12" r="10" />{" "}
                  <line x1="12" y1="16" x2="12" y2="12" />{" "}
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                More Info
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBackground;
