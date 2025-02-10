import { category } from "./../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./MovieCard.css";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { item } = props;
  const bg = apiConfig.w500Image(item.backdrop_path || item.poster_path);
  const link = `/${category[props.category]}/${item.id}`;
  return (
    <div className="flex-col flex group">
      <Link to={link}>
        <div
          className="bg-playbtn relative overflow-hidden rounded-md mx-1 bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <svg
            version="1.1"
            id="play"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            height="50px"
            width="50px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <path
              className="stroke-solid"
              fill="none"
              stroke="#e74c3c"
              d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
            />
            <path
              className="icon"
              fill="#e74c3c"
              d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
            />
          </svg>

          <h1
            className="text-md mt-2 left-0 z-4 absolute  bottom-0 ml-2 md:opacity-100 mt-1280:opacity-0 opacity-100 group-hover:opacity-100 linear duration-300"
            style={{ zIndex: "2" }}
          >
            {item.title || item.name}
          </h1>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;
