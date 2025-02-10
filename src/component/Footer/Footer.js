import bg from "../../assets/image/13503.jpg";
import { Link } from "react-router-dom";
import logo from "./../../assets/image/tmovie.png";
import "./Footer.css";
function Footer() {
  return (
    <div
      className="relative h-[730px]  mt-768:h-[420px] mt-812:h-60  bg-cover bg-bottom bg-no-repeat ovl--footer"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-h-[1000px] absolute top-0 left-0 w-full h-full z-10 px-10">
        <div className="grid grid-cols-1 place-items-center gap-10 mt-568:content-start mt-568:grid-cols-2 mt-812:grid-cols-4 mt-6">
          <div>
            <div className="px-4 flex items-center">
              <img className="h-12" src={logo} alt="" />
              <Link className="font-bold text-xl" to="/">
                BiliMovies
              </Link>
            </div>
            <div className="mt-5">
              <div className="flex justify-center space-x-4 ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/ngo.vanbang.20.04"
                  className="p-1 rounded-full bg-[#262626]"
                >
                  <svg
                    className="icon--social"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ngovanbang2001/"
                  className="p-1 rounded-full bg-[#262626]"
                >
                  <svg
                    className="icon--social"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ng%C3%B4-v%C4%83n-b%E1%BA%B1ng-6a3591205/"
                  className="p-1 rounded-full bg-[#262626] "
                >
                  <svg
                    className="h-5 w-5 icon--social"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                    <rect x="2" y="9" width="4" height="12" />{" "}
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center">
            <Link className="py-2 font-bold" to="/">
              Home
            </Link>
            <Link className="py-2 font-bold" to="/">
              Contact us
            </Link>
            <Link className="py-2 font-bold" to="/">
              Term of services
            </Link>
            <Link className="py-2 font-bold" to="/">
              About us
            </Link>
          </div>
          <div className="flex flex-col text-center">
            <Link className="py-2 font-bold" to="/">
              Live
            </Link>
            <Link className="py-2 font-bold" to="/">
              FAQ
            </Link>
            <Link className="py-2 font-bold" to="/">
              Premium
            </Link>
            <Link className="py-2 font-bold" to="/">
              Privacy policy
            </Link>
          </div>
          <div className="flex flex-col text-center">
            <Link className="py-2 font-bold" to="/">
              You must watch
            </Link>
            <Link className="py-2 font-bold" to="/">
              Recent release
            </Link>
            <Link className="py-2 font-bold" to="/">
              Top IMDB
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 ml-4" style={{ zIndex: "1" }}>
        Made by Bang Ngo
      </div>
    </div>
  );
}
export default Footer;
