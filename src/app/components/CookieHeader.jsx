"use client";
import { BiSolidCookie } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const CookieHeader = () => {
  return (
    <header className="icons">
      <BiSolidCookie className="cookie" />
      <RxCross2 className="cross" />
    </header>
  );
};

export default CookieHeader;
