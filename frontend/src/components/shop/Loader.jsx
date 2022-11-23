import React from "react";

function Loader() {
  return (
    <div className="h-60 w-60 md:h-80 md:w-80 flex justify-center items-center">
      <img src="/animation.gif" alt="loading beer" />
    </div>
  );
}

export default Loader;
