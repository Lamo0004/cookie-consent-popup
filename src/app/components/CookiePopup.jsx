"use client";
import { use, useState } from "react";
import CookieHeader from "./CookieHeader";
import CookieFooter from "./CookieFooter";

const CookiePopup = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  return (
    // && hvis er true //
    !cookiesAccepted && (
      /* Hvis det er sandt at værdien er cookie accepted er true, så hvis følgende. Ellers lad være */
      <article className="cookiePopup">
        <CookieHeader></CookieHeader>
        <CookieFooter cookiesAccepted={cookiesAccepted} setCookiesAccepted={setCookiesAccepted} /* sender værdien med ned (prop), så vi har adgang til statet nede i komponentet*/></CookieFooter>
      </article>
    )
  );
};

export default CookiePopup;
