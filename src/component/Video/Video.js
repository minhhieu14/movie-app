import { useEffect, useRef } from "react";
const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="pb-9 pt-7">
      <div className="text-xl font-bold mb-4 pl-10">
        <h2 className="text-xl font-bold ">{item.name}</h2>
      </div>
      <div className="video flex items-center justify-center">
        <iframe
          src={`https://www.youtube.com/embed/${item.key}`}
          ref={iframeRef}
          width="90%"
          title="video"
          className="rounded-md"
        ></iframe>
      </div>
    </div>
  );
};
export default Video;
