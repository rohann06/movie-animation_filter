import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";

const Movies = ({ image, title }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      layout
      className=" shadow-lg rounded-xl"
    >
      <h2 className=" text-xs font-bold">{title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt="image"
        className=" w-[100%] h-[30vh] mb-[1rem]  rounded-xl object-cover"
      />
    </m.div>
  );
};

export default Movies;
