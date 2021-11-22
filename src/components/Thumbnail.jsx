import React from "react";
import LazyLoad from "react-lazyload"; // library used for lazyloading

const Thumbnail = ({ image_name }) => {
  //edge condition for missing image
  let loc = image_name.posterimage;
  if (image_name.posterimage === "posterthatismissing.jpg") {
    loc = "placeholder_for_missing_posters.png";
  }

  //displaying movie thumbnails and movie name
  return (
    <div
      className="p-2 h-full flex items-start justify-center cursor-pointer 
        transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <div>
        <LazyLoad once>
          <section class="hero container max-w-screen-lg mx-auto flex justify-center">
            <img class="md:h-72" src={loc} alt="missing img" />
          </section>
        </LazyLoad>
        <div className="p-1">
          <h2
            className="mt-1 text-base sm:text-xl md:text-2xl text-white transition-all
                duration-100 ease-in-out group-hover:font-semibold overflow-hidden overflow-ellipsis"
          >
            {image_name.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
