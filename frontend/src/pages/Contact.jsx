import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "react-toastify";
import Title from "../components/global/Title";

const FORM_ENDPOINT = "";

function Contact() {
  const notify = (message) => toast(message);

  const ref2 = useRef(null);

  const inView2 = useInView(ref2);

  const handleSubmit = (e) => {
    e.preventDefault();
    return notify("SEND !");
  };

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute  bg-backcolor left-0 w-full h-full -z-10">
        <div className="bg-backpink transform translate-y-0 sm:translate-y-56 md:translate-y-1 lg:translate-y-0 w-full h-full" />
      </div>
      <div className="z-10 pt-20 md:pt-32  relative w-full ">
        <div className=" mt-[-50px]">
          <Title title="CONTACT" />
          <img
            className="mt-5 w-[90%] m-auto md:pt-10"
            src="src/assets/dogtop.jpeg"
            alt="banimage"
          />
        </div>
        <div className=" flex justify-center sm:justify-between  flex-row-reverse w-[90%] m-auto md:w-full mt-16">
          <form
            ref={ref2}
            className="bg-backgreen border z-50 3px border-black	shadow-md rounded  px-14 pt-20 pb-8 m-10 md:w-[40%]"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
          >
            <h2 className="font-anton text-center text-4xl md:text-4xl text-white mt-[-30px]  ">
              LEAVE US A MESSAGE
            </h2>

            <div className="mb-3 pt-5 my-8">
              <input
                type="text"
                placeholder="Last name"
                name="Last name"
                className="border 3px border-black	px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-5 ">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-5 ">
              <input
                type="Object"
                placeholder="Object"
                name="Object"
                className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>

            <div className="mb-3 pt-5">
              <textarea
                placeholder="Message"
                name="message"
                className="border 3px border-black px-3 py-3 placeholder-gray-400 text-gray-600 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-10 flex justify-end ">
              <motion.button
                whileHover={{ scale: 1.2 }}
                className=" bg-bargreen text-white active:bg-blue-600 font-bold w-36 uppercase text-xl px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Send
              </motion.button>
            </div>
          </form>
          <div className=" relative hidden sm:flex md:flex lg:flex  flex-col">
            <motion.div
              style={{
                transform: inView2
                  ? "translateX(150px)"
                  : "translateX(-1000px)",
                opacity: inView2 ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="text-start relative flex my-10 justify-start w-96 "
            >
              <img
                className="objet-cover h-full w-full"
                src="src/assets/space.jpeg"
                alt="spaceimage"
              />
              <div className="w-full h-full absolute bg-white bg-opacity-20 bottom-10 left-10" />
            </motion.div>
            <motion.div
              style={{
                transform: inView2 ? "translateX(450px)" : "translateX(1000px)",
                opacity: inView2 ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
              transition={{ delay: 3 }}
              className="text-start flex my-10 relative justify-start  w-96"
            >
              <img
                className="text-xs object-cover h-full w-full"
                src="src/assets/concert.jpeg"
                alt="concertimage"
              />
              <div className="w-full h-full absolute bg-white bg-opacity-20 bottom-10 left-10" />
            </motion.div>
          </div>
        </div>
        <div>
          <h2 className="text-bargreen text-center text-4xl  text-stroke transform translate-y-[20%] md:text-9xl ">
            #BREWDOG FAMILY
          </h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
