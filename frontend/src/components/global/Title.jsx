import React from "react";
import PropTypes from "prop-types";

function Title({ title, className }) {
  return (
    <div className="flex justify-center">
      <h1
        className={`font-anton text-center text-6xl md:text-9xl text-bargreen text-stroke ${className}`}
      >
        {title}{" "}
      </h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Title;
