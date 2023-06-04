"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CategoriesImpl from "./types";
import useCategories from "./use-categories";
import cx from "classnames";
import { Menu } from "iconsax-react";

const Categories = ({}: CategoriesImpl) => {
  const {
    categoryParam,
    onClick: catOnclick,
    cats,
    setOpenMenu,
    showCategories,
  } = useCategories();
  return (
    <>
      <div
        className="absolute left-0 right-16 top-0
      flex justify-center items-center text-sm h-16 md:right-4"
      >
        <Menu
          onClick={() => setOpenMenu(true)}
          className="text-slate-800 ml-4 cursor-pointer hover:text-slate-500 hidden md:block"
        />
        {showCategories && (
          <div className="w-full max-w-3xl pl-4">
            <Splide
              options={{
                direction: "rtl",
                autoWidth: true,
                arrows: false,
                pagination: false,
                autoplay: true,
              }}
            >
              <SplideSlide className="h-12 flex justify-center items-center">
                <span
                  onClick={() => {
                    catOnclick("all");
                  }}
                  className={cx(
                    `bg-slate-100 py-1.5 px-6 cursor-pointer rounded-3xl
             border-transparent transition-all duration-200 text-center
        hover:border-slate-700 hover:bg-slate-700 hover:text-white ml-3`,
                    {
                      "border-slate-700 bg-slate-700 text-white":
                        categoryParam === "all",
                    }
                  )}
                >
                  {"همه"}
                </span>
              </SplideSlide>
              {cats.map(({ name, slug }) => (
                <SplideSlide
                  key={slug}
                  className="h-12 flex justify-center items-center"
                >
                  <span
                    onClick={() => {
                      catOnclick(slug);
                    }}
                    className={cx(
                      `bg-slate-100 py-1.5 px-6 cursor-pointer rounded-3xl
             border-transparent transition-all duration-200 text-center
        hover:border-slate-700 hover:bg-slate-700 hover:text-white ml-3`,
                      {
                        "border-slate-700 bg-slate-700 text-white":
                          categoryParam === slug,
                      }
                    )}
                  >
                    {name}
                  </span>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
      </div>
    </>
  );
};
export default Categories;
