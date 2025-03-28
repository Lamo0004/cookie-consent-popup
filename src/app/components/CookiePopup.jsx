"use client";
import { use, useState } from "react";
import { BiSolidCookie } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const CookiePopup = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  return (
    // && hvis er true //
    !cookiesAccepted && (
      /* Hvis det er sandt at værdien er cookie accepted er true, så hvis følgende. Ellers lad være */
      <article className="cookiePopup">
        <div className="icons">
          <BiSolidCookie className="cookie" />
          <RxCross2 className="cross" />
        </div>
        <p className="paragraph">We use cookies to improve your user experience</p>
        <button onClick={() => setCookiesAccepted(!cookiesAccepted)} /* Sætter værdien til det modsatte */ className="button">
          I like Cookies
        </button>
      </article>
    )
  );
};

export default CookiePopup;
