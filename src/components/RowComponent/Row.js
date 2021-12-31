import React, { useState, useRef } from "react";
import ItemCard from "../Item/ItemCard";

const Row = ({ children, items }) => {
  const scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <h1 className="mb-4 mt-4 ml-2 text-white text-5xl font-bold ">
        {children}
      </h1>
      <div className="relative">
      {scrollX !== 0 && (
        <button className="absolute top-0 bottom-0 z-10 text-white hover:text-red-500" onClick={() => slide(-250)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="flex overflow-auto scroll-smooth" ref={scrl} onScroll={scrollCheck}>
        <div className="flex ml-2">
          {items ? (
            items.map((item) => <ItemCard key={item.id} item={item} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {!scrolEnd && (
        <button className="absolute right-0 top-0 bottom-0 z-10  text-white hover:text-red-500" onClick={() => slide(+250)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      </div>
    </>
  );
};

export default Row;
