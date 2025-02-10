import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import Button from "./../../component/Button/Button";
import tmdbApi from "./../../api/tmdbApi";
const Season = (props) => {
  const { season, getLinks } = props;
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const episodeRef = useRef(null);
  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const response = await tmdbApi.getTVSeasons(id, season.season_number);

        setEpisodes(response.episodes);
      } catch {
        console.log("error");
      }
    };
    getEpisodes();
  }, [id, season]);
  const handleSeason = () => {
    episodeRef.current.classList.toggle("block");
    episodeRef.current.classList.toggle("hidden");
  };
  console.log("episodes", episodes);
  return (
    <div>
      <div onClick={handleSeason} className="">
        {season.name}
        <svg
          class="h-8 w-8 text-white inline-block"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div
        ref={episodeRef}
        className="hidden transition ease-in-out duration-300"
      >
        {" "}
        {episodes &&
          episodes.map((episode, i) => (
            <>
              <Button
                onClick={() => getLinks(season.season_number, episode)}
                className="p-1 min-w-[30px] bg-yellow-500 rounded-sm m-1 flex-1"
              >
                {episode.episode_number}
              </Button>
            </>
          ))}
      </div>
    </div>
  );
};
export default Season;
