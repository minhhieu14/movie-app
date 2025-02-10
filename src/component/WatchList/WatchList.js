import { useState, useEffect } from "react";
import Slider from "react-slick";
import tmdbApi, { category } from "./../../api/tmdbApi";
import PrevBtn from "./../PrevBtn/PrevBtn.js";
import NextBtn from "./../NextBtn/NextBtn.js";
import MovieCard from "./../MovieCard/MovieCard";
import "./WatchList.css";
const WatchList = (props) => {
  const [items, setItems] = useState([]);

  const settings = {
    infinite: true,

    swipeToSlide: true,
    pauseOnHover: true,

    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: true,
          speed: 800,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      try {
        if (props.type !== "similar") {
          switch (props.category) {
            case category.movie:
              if (props.type === "trending") {
                response = await tmdbApi.getTrendingList(category.movie, {
                  params,
                });
              } else {
                response = await tmdbApi.getMovieList(props.type, {
                  params,
                });
              }

              break;
            default:
              if (props.type === "trending") {
                response = await tmdbApi.getTrendingList(category.tv, {
                  params,
                });
              } else {
                response = await tmdbApi.getTvList(props.type, {
                  params,
                });
              }
          }
        } else {
          switch (props.category) {
            case category.movie:
              response = await tmdbApi.getSimilar(props.category, props.id);
              break;
            default:
              response = await tmdbApi.getSimilar(props.category, props.id);
          }
        }

        setItems(response.results.slice(1, 25));
      } catch {
        console.log("error");
      }
    };
    getList();
  }, []);

  return (
    <div className="group relative">
      <Slider {...settings}>
        {items.map((item, i) => (
          <MovieCard key={i} item={item} category={props.category} />
        ))}
      </Slider>
    </div>
  );
};
export default WatchList;
