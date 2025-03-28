"use client";

const CookieButton = ({ cookiesAccepted, setCookiesAccepted }) => {
  return (
    <button onClick={() => setCookiesAccepted(!cookiesAccepted)} /* Sætter værdien til det modsatte */ className="button">
      I like Cookies
    </button>
  );
};

export default CookieButton;
