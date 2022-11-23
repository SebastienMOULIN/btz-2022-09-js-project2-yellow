import React from "react";
import PropTypes from "prop-types";

function PictoBeer({ onClick, display }) {
  return (
    <div className="h-14 w-14 md:h-20 md:w-20 ml-10">
      <img
        onClick={onClick}
        src="/chopeBiereAnimation1.png"
        alt="icone menu burger"
        className={display}
      />
    </div>
  );
}

PictoBeer.propTypes = {
  onClick: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
};

export default PictoBeer;
