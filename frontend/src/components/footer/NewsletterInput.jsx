/* eslint-disable no-restricted-syntax */
import React from "react";
import { toast } from "react-toastify";
import giphy from "../../assets/giphy.gif";
import wall from "../../assets/wall.gif";

function NewsletterInput() {
  const [email, setEmail] = React.useState("");
  const notify = (message) => toast(message);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      notify(
        <div>
          <img className="w-50" src={giphy} alt="gif" />
          "Thank your for your subscription ! You will now recieve our news in
          your mailbox !"
        </div>
      );
    } else {
      notify(
        <div>
          <img className="w-50" src={wall} alt="gif" />
          "Please enter a valid email"
        </div>
      );
    }
  };

  return (
    <div className="flex w-full m-3 justify-center">
      <div className=" bg-cream   h-full flex justify-center items-center align-middle ">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex w-full">
            <div className=" bg-cream p-2 border-2 border-black h-full flex justify-center items-center align-middle ">
              <p>EMAIL</p>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="🔔   Enter your Email ... "
              value={email}
              className="w-full focus:border-black focus:outline-none px-5 border-2 border-black bg-navBlue-400"
            />
            <input
              className="cursor-pointer hover:opacity-50 border-2 p-2 border-black"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsletterInput;
