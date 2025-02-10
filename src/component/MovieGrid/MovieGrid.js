import tmdbApi, { category, movieType, tvType } from "./../../api/tmdbApi";

import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { OutlineButton } from "./../Button/Button";
import MovieCard from "./../MovieCard/MovieCard";
import Loader from "../Loader/Loader";
function MovieGrid(props) {
  const [preloader, setPreloader] = useState(true);
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getListType = async () => {
      let response = null;
      try {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params,
            });
        }

        setItems(response.results);
        setItems2(response.results);
        setTotalPage(response.total_pages);
        setPreloader(false);
      } catch {
        console.log("error");
      }
    };
    getListType();
    setKeyword("");
  }, [props.category]);
  const loadMore = async () => {
    setPreloader(true);
    let response = null;

    const params = {
      page: page + 1,
    };
    switch (props.category) {
      case category.movie:
        response = await tmdbApi.getMovieList(movieType.upcoming, {
          params,
        });
        break;
      default:
        response = await tmdbApi.getTvList(tvType.popular, { params });
    }

    setItems([...items, ...response.results]);
    setItems2([...items, ...response.results]);
    setPage(page + 1);
    setPreloader(false);
  };
  const search = async (e) => {
    const { value } = e.target;
    setKeyword(value);
    if (value) {
      const params = {
        query: value,
      };
      let response = await tmdbApi.searchList(props.category, { params });
      setItems(response.results);
    } else {
      setItems(items2);
    }
  };
  return (
    <div className="bg-[#1a1a1a]">
      {preloader && <Loader />}
      <div className="flex mt-320:mx-3 mb-3 justify-end text-gray-500 ">
        <div className="flex w-full  relative  mt-812:w-1/3   search-list  items-center mt-812:mr-[70px]  mt-320:m-0 ">
          <svg
            className="w-4 h-8 mt-320:left-2  absolute right-[315px] text-[#828c87] "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={search}
            className="outline-none px-10 mr-16 mt-320:mr-0 mt-320:w-full py-1 search-list-focus:visible border border-white rounded-sm	"
          />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4 py-10 mt-320:px-8 mt-812:px-20  mt-320:grid-cols-1 mt-768:grid-cols-3 mt-812:grid-cols-4  ">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className=" flex justify-center py-5">
          <OutlineButton
            className="text-center p-[10px] bg-blue duration-300 border-white w-[200px] border border-solid    hover:text-black hover:bg-white"
            onClick={loadMore}
          >
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </div>
  );
}
export default MovieGrid;
