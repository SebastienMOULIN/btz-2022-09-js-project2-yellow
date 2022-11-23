import React from "react";
import PropTypes from "prop-types";

function PictoBeerAnimation({ onClick }) {
  return (
    <div className="z-20">
      <img
        onClick={onClick}
        src="/animation.gif"
        alt="icone menu burger"
        className="h-14 w-14 md:h-20 md:w-20 ml-10"
      />
    </div>
  );
}

PictoBeerAnimation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PictoBeerAnimation;
