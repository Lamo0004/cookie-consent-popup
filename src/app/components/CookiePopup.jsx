"use client";
import { BiSolidCookie } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const CookiePopup = () => {
  return (
    <article className="cookiePopup">
      <div className="icons">
        <BiSolidCookie className="cookie" />
        <RxCross2 className="cross" />
      </div>
      <p className="paragraph">We use cookies to improve your user experience</p>
      <button className="button">I like Cookies</button>
    </article>
  );
};

export default CookiePopup;
