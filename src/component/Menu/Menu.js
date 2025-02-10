import { Link, Route } from "react-router-dom";
import "./Menu.css";

import logo from "../../assets/image/tmovie.png";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <li className={`nav-item relative p-3 ${match ? "active" : ""}`}>
            <Link
              className="nav-link inline-block w-21"
              to={to}
              exact={activeOnlyWhenExact}
            >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
const sites = [
  { label: "Home", to: "/", exac: true },
  { label: "Movie", to: "/movie", exac: false },
  { label: "TV Shows", to: "/tv-shows", exac: false },
];

function Menu() {
  return (
    <div className="navbar flex justify-between mt-768:justify-start items-center mt-768:mx-20 mx-2">
      <div className="navbar-brand p-2 ">
        <Link className="flex items-center" to="/">
          <img className="w-12 h-12" src={logo} alt="" />
          <h3 className="text-[#e40913] px-4 font-bold text-3xl sm:hidden ">
            BiliMovies
          </h3>
        </Link>
      </div>
      <div className="mt-768:block hidden">
        <ul className=" flex p-2 font-bold  ">
          {sites.map((site, index) => (
            <MenuLink
              key={index}
              label={site.label}
              to={site.to}
              activeOnlyWhenExact={site.exact}
            />
          ))}
        </ul>
      </div>
      <div className="block mt-768:hidden  ">
        {" "}
        <label htmlFor="nav-mobile-category">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <input
          type="checkbox"
          id="nav-mobile-category"
          className="hidden nav__category"
        />
        <label
          htmlFor="nav-mobile-category"
          className="w-screen h-screen z-0 bg-[#999999] opacity-50 hidden nav__overlay top-0 right-0 fixed"
        ></label>
        <ul className="pt-8 bg-black z-99 h-screen absolute right-full ease-in-out top-0 w-4/5 nav_mobile">
          {sites.map((site, index) => (
            <MenuLink
              key={index}
              label={site.label}
              to={site.to}
              activeOnlyWhenExact={site.exact}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Menu;
