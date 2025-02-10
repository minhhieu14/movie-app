import tmdbApi from "./../../api/tmdbApi";
import Video from "./../Video/Video";

import { useEffect, useState } from "react";
const TrailerVideo = (props) => {
  const [items, setItems] = useState([]);
  const { id, category } = props;

  useEffect(() => {
    const getVideo = async () => {
      try {
        const response = await tmdbApi.getVideo(category, id);
        setItems(response.results.slice(0, 1));
      } catch {
        console.log("error");
      }
    };

    getVideo();
  }, [category, id]);

  return (
    <>
      {items.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

export default TrailerVideo;
