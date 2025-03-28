"use client";
import CookieButton from "./CookieButton";

const CookieFooter = ({ cookiesAccepted, setCookiesAccepted }) => {
  return (
    <footer>
      <p className="paragraph">We use cookies to improve your user experience.</p>
      <CookieButton cookiesAccepted={cookiesAccepted} setCookiesAccepted={setCookiesAccepted}></CookieButton>
    </footer>
  );
};

export default CookieFooter;
