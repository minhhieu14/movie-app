const PrevBtn = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="opacity-100 mt-1280:opacity-0 group-hover:opacity-100 absolute top-1/2 z-10 transform -translate-y-1/2 left-0 w-15 h-36 flex items-center justify-center cursor-pointer rounded hover:opacity-70 duration-300 bg-penetration-5"
    >
      <svg
        className="h-16 w-16 text-red-600"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <polyline points="15 6 9 12 15 18" />
      </svg>
    </div>
  );
};
export default PrevBtn;
