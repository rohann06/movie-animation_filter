import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";

const Filter = ({ populer }) => {
  const { setFiltered, activeGenre, setActiveGenre } = useStateContext();

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(populer);
      return;
    }

    const filtered = populer.filter((Movie) =>
      Movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className=" my-5 flex gap-2 lg:gap-6">
      <button
        onClick={() => setActiveGenre(0)}
        className={` py-2 px-5 rounded-full border-[2px] font-semibold  border-sky-900 ${
          activeGenre === 0 ? "bg-sky-900 text-sky-50" : "bg-white text-sky-900"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setActiveGenre(35)}
        className={` py-2 px-5 rounded-full border-[2px] font-semibold  border-sky-900 ${
          activeGenre === 35
            ? "bg-sky-900 text-sky-50"
            : "bg-white text-sky-900"
        }`}
      >
        Comedy
      </button>
      
      <button
        onClick={() => setActiveGenre(28)}
        className={` py-2 px-5 rounded-full border-[2px] font-semibold  border-sky-900 ${
          activeGenre === 28
            ? "bg-sky-900 text-sky-50"
            : "bg-white text-sky-900"
        }`}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
