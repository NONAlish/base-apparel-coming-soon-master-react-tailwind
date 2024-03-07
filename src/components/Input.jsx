import arrowsvg from "../images/icon-arrow.svg";
import erroesvg from "../images/icon-error.svg";
import { useState } from "react";

export default function Input() {
  const [display, setDispaly] = useState();
  const [str, setStr] = useState("");

  const img = (
    <img className="w-10 h-10 my-auto mr-4" src={erroesvg} alt="erroesvg" />
  );

  function handleChange(event) {
    setStr(event.target.value);
  }

  function handleClick() {
    if (!str.includes("@") || str === "") {
      setDispaly("block");
    } else {
      setDispaly("hidden");
    }
  }

  return (
    <div>
      <div className="flex justify-between w-8/12 h-16 rounded-full border-2 border-dark_linear border-opacity-40">
        <input
          className="w-3/6 ml-7 text-gray_linear bg-transparent focus:outline-none placeholder-gray_linear"
          type="text"
          placeholder="Email Adress"
          event={str}
          onChange={() => handleChange(event)}
        />
        <div className="w-92 flex justify-between">
          {display === "block" ? img : undefined}
          <button
            onClick={handleClick}
            className="flex w-32 h-full rounded-full bg-gradient-to-r from-light_linear to-dark_linear border-none hover:bg-gray_linear"
          >
            <img className="flex mx-auto my-auto" src={arrowsvg} alt="arrow" />
          </button>
        </div>
      </div>
      {display === "block" ? (
        <p className={`text-redError ml-8 mt-4`}>
          Please provide a valid email
        </p>
      ) : undefined}
      {display === "hidden" ? (
        <p className={`text-textSuccess ml-8 mt-4`}>
          Form successfully submitted!
        </p>
      ) : undefined}
    </div>
  );
}
