/* eslint-disable no-alert */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { days, months, years } from "../../utils/constants";

function Age({ setIsVerified }) {
  const [month, setMonths] = useState("");
  const [day, setDays] = useState("");
  const [year, setYears] = useState("");
  const notify = (message) => toast(message);
  const today = new Date(Date.now());

  const handleMonthChange = (e) => {
    setMonths(e.target.value);
  };

  const handleDayChange = (e) => {
    setDays(e.target.value);
  };

  const handleYearChange = (e) => {
    setYears(e.target.value);
  };

  const handleVerification = () => {
    if (year && month && day) {
      const todayYear = today.getFullYear();
      if (todayYear - year >= 18) {
        notify("Welcome to our website");
        localStorage.setItem("verified", true);
        return setIsVerified(true);
      }
      return notify("Prohibited for minors !");
    }
    return notify("Please complete all fields");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full fixed top-0 z-50 left-0 h-full bg-opacity-90 bg-navBlue-400 flex flex-col justify-center align-middle items-center"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex w-auto"
        src="src/assets/LogoEnterTheWebSite.png"
        alt="Age"
      />
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          className="text-colorAge text-center text-4xl text-stroke  pt-10"
        >
          How old are you ?
        </motion.h1>
      </div>
      <div className="flex flex-row items-center align-middle justify-center space-x-10  h-40 ">
        <motion.select
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "just" }}
          className="border-black border-2 px-2 md:px-6 lg:px-12 py-5"
          onChange={handleYearChange}
          name="years"
        >
          <option>Years</option>
          {years.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </motion.select>
        <motion.select
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, type: "just" }}
          className="border-black border-2 px-2 md:px-6 lg:px-12 py-5"
          onChange={handleDayChange}
          name="days"
        >
          <option>Days</option>
          {days.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </motion.select>
        <motion.select
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "just" }}
          className="border-black border-2 px-2 md:px-6 lg:px-12 py-5"
          onChange={handleMonthChange}
          name="months"
        >
          <option className="text-center"> Months </option>
          {months.map((element, index) => (
            <option key={element} value={index + 1}>
              {element}
            </option>
          ))}
        </motion.select>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex bg-bargreen border p-2 rounded text-white text-stroke"
        onClick={handleVerification}
        type="submit"
        alt="Cheers"
      >
        Cheers!
      </motion.button>
    </motion.div>
  );
}

Age.propTypes = {
  setIsVerified: PropTypes.func.isRequired,
};

export default Age;
