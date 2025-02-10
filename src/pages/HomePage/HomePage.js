import SlideBackground from "../../component/SlideBackground/SlideBackground";

import WatchList from "./../../component/WatchList/WatchList.js";
import { category, movieType, tvType } from "./../../api/tmdbApi";
function HomePage() {
  return (
    <>
      <SlideBackground />
      <div className=" bg-black pl-10 pr-10 mr-0 py-10">
        <div className="section mb-8 ">
          <div className="flex justify-between mb-[5px]">
            <h2 className="text-xl font-bold ">Trending Movies</h2>
          </div>
          <WatchList category={category.movie} type={movieType.trending} />
        </div>
        <div className="section mb-8 ">
          <div className="flex justify-between mb-[5px]">
            <h2 className="text-xl font-bold ">Trending TV</h2>
          </div>
          <WatchList category={category.tv} type={tvType.trending} />
        </div>
        <div className="section mb-8 ">
          <div className="flex justify-between mb-[5px]">
            <h2 className="text-xl font-bold ">Popular Movies</h2>
          </div>
          <WatchList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-8 ">
          <div className="flex justify-between mb-[5px]">
            <h2 className="text-xl font-bold ">Popular TV</h2>
          </div>
          <WatchList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-8 ">
          <div className="flex justify-between mb-[5px]">
            <h2 className="text-xl font-bold ">Top rated Movies</h2>
          </div>
          <WatchList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section">
          <div className="flex justify-between mb-[5px]">
            <h2 className="text-xl font-bold ">Top rated TV</h2>
          </div>
          <WatchList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
