import { useParams } from "react-router";
import MovieGrid from "./../../component/MovieGrid/MovieGrid";
function Catalog() {
  const { category } = useParams();
  const upperCase = (category) => {
    let firstLetter = category.substring(0, 1);
    let remainingLetters = category.substring(1, category.length);
    firstLetter = firstLetter.toUpperCase();
    const title = firstLetter + remainingLetters;
    return title;
  };

  return (
    <div>
      <div className="pt-20 pb-10  flex  bg-[#1a1a1a] justify-center">
        <h1 className="text-white text-2xl">{upperCase(category)}</h1>
      </div>
      <div className="">
        <MovieGrid category={category === "movie" ? "movie" : "tv"} />
      </div>
    </div>
  );
}
export default Catalog;
