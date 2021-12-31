import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <>
    <div
      className="w-full h-auto  px-8
    bg-zinc-900 flex justify-between items-center mb-6"
    >
      <Link to="/" className="text-3xl text-red-700 font-bold">
        <i>WATCHit</i>
      </Link>
      <div className="w-1/2 flex items-center justify-end md:justify-around">
        <Link to="movies" className="text-2xl px-2 py-3  text-white">
          Movies
        </Link>
        {/* <Link to="/tvshows" className="text-2xl px-2 py-3 text-white">
          TV Shows
        </Link> */}
      </div>
    </div>
  </>
);

export default Header;
