import Menu from "./../Menu/Menu";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [isTop, setTop] = useState(true);
  const scroll = () => {
    window.addEventListener("scroll", () => {
      window.pageYOffset < 100 ? setTop(true) : setTop(false);
    });
  };
  scroll();
  return (
    <div
      className={`w-full  py-1 fixed z-50  text-white  ${
        isTop ? "bg-header" : "bg-black"
      }`}
    >
      <Menu />
    </div>
  );
}

export default Header;
