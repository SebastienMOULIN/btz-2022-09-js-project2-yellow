import React from "react";

function NetworkLinks() {
  return (
    <div className="pt-6 w-full flex space-x-6 items-center align-middle justify-center ">
      <a
        href="https://www.instagram.com/brewdogfranceofficiel/?hl=fr"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-10" src="/instagram_2.png" alt="instagram" />
      </a>
      <a
        href="  https://fr-fr.facebook.com/brewdogfrance/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-10" src="/facebook_1.png" alt="facebook" />
      </a>
      <a
        href=" https://www.youtube.com/user/BrewDogBeer"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-10" src="/youtube_1 (1).png" alt="youtube" />
      </a>
    </div>
  );
}

export default NetworkLinks;
