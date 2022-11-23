import React from "react";
import { motion } from "framer-motion";
import Title from "../components/global/Title";

function Brewery() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1 }}
      className="w-full bg-basic bg-cover relative md:-z-10"
    >
      <div className="z-10 relative w-full md:pt-10 ">
        <div>
          <Title title="BREWERY" className="my-6" />

          <img
            className=" p-3 object-cover bg-center w-full h-40 md:h-80 md:pt-10 "
            src="src/assets/history-2012.jpeg"
            alt="brewery"
          />
        </div>
        <div className="p-10">
          <h2 className="w-full  font-anton text-center text-4xl md:text-8xl text-white mt-5 ">
            OUR BREWERY IN ELLON
          </h2>

          <h3 className=" text-right text-2xl md:text-4xl pt-12 pb-5">
            INGREDIENTS
          </h3>
          <div className="flex justify-end">
            <p className="text-right text-[16px] md:text-xl w-2/3">
              It only takes 4 ingredients to brew beer, but what we make with
              these ingredients is what makes it special. The finest malted
              barley, high quality hops, water from purified Scottish source and
              our own in-house yeast strains come together in harmony to create
              beer for all.
            </p>
          </div>
        </div>
        <img
          className=" p-3 object-cover bg-center w-full h-40 md:h-80"
          src="src/assets/155_-_bronze_beers_-_may_2021_19052021_-_brewdog_-_grant_anderson_-_fullsize.jpeg"
          alt="technique"
        />
        <div className="w-full p-10">
          <h3 className="text-center text-2xl md:text-4xl font-normal  pb-5">
            GOOD BEER THAT FEELS GOOD
          </h3>
          <div className="flex justify-center">
            <p className="text-center text-[16px] md:text-xl w-2/3">
              Exceptional quality is the cornerstone of our brewery. All BrewDog
              beers are brewed from barley top quality malt and hops from the
              best producers around the world.
            </p>
          </div>
        </div>
        <img
          className="p-3 object-cover bg-center w-full h-40 md:h-96"
          src="src/assets/Beer_Quality_4.webp"
          alt="beer"
        />
        <div className="w-full p-10">
          <h3 className="text-left md:text-4xl text-2xl font-normal pb-5">
            BREWING TECHNIQUE
          </h3>

          <p className="text-left text-[16px] md:text-xl w-2/3">
            Our state-of-the-art Aberdeenshire brewery is the kingdom of steel
            and dreams. We have 3 brewing sites and a innovation pilot kit. We
            also use wind power to make our beer, as well as brewing by-products
            (such as CO2, water and biomethane) to help manufacture some beer.
          </p>
          <h2 className="text-bargreen text-center text-8xl  text-stroke transform translate-y-[60%] ">
            #BREW
          </h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Brewery;
