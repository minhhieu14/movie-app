import tmdbApi from "./../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useEffect, useState } from "react";

const CastList = (props) => {
  const [items, setItems] = useState([]);
  const { id, category } = props;

  useEffect(() => {
    const getCastList = async () => {
      try {
        const response = await tmdbApi.getCredits(category, id);

        setItems(response.cast.slice(0, 5));
      } catch {
        console.log("error");
      }
    };
    getCastList();
  }, [category, id]);

  return (
    <div className="flex ">
      {items &&
        items.map((item, i) => (
          <div key={i} className="text-center mr-4 ">
            <div
              className="bg-cover  bg-center h-32 sm:w-20 sm:h-24 w-32 flex-shrink-0  bg-no-repeat  "
              key={i}
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  item.profile_path
                )})`,
              }}
            >
              {" "}
            </div>
            <h2 className="text-sm inline-block md:hidden">{item.name}</h2>
          </div>
        ))}
    </div>
  );
};
export default CastList;
