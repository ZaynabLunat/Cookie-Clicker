import { useState, useEffect } from "react";
import UpgradeButton from "./Components/UpgradeButton";
import ResetButton from "./Components/ResetButton";
import Button20 from "./components/Button20";
import Button50 from "./components/Button50";
import Button100 from "./components/Button100";
import CookieImage from "./Components/CookieImage";

// import Popup1000 from "./Components/Popup1000";

export default function App() {
  const [cookies, setCookies] = useState(1);
  const [cps, setCps] = useState(1); // cookies per second

  useEffect(() => {
    const theInterval = setInterval(function () {
      setCookies((curr) => curr + cps);
    }, 1000);

    return () => clearInterval(theInterval);
  }, [cps]); // whenever cps changes, rerun the useEffect

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade() {
    setCookies(cookies - 10);
    setCps(cps + 1);
  }

  function resetCookies() {
    // console.log("reset cookies called");
    setCookies(0);
    setCps(0);
  }

  function add20Cookies() {
    // console.log("20 more cookies");
    setCookies(cookies + 20);
    // setCps(cps + 20);
  }

  function add50Cookies() {
    console.log("50 more cookies");
    setCookies(cookies + 50);
  }

  function add100Cookies() {
    console.log("100 more cookies");
    setCookies(cookies + 50);
  }

  function CookieImage() {
    return (
      <div>
        <img
          src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg?resize=1200:*"
          alt="Excited?!"
        />
      </div>
    );
  }

  return (
    <div>
      <h1>Cookie Clicker</h1>

      <button onClick={incrementCookies}>I am Cookie</button>
      <p>
        <b>Cookies: {cookies}</b>
      </p>

      <p>
        <b>Cookies Per Second (cps): {cps}</b>
      </p>
      <UpgradeButton buyUpgrade={buyUpgrade} />
      <ResetButton resetCookies={resetCookies} />

      <p>
        <b>Want more cookies</b>
      </p>
      <Button20 add20Cookies={add20Cookies} />
      {/* <button onClick={incrementCookies20}> Buy 20 cookies </button> */}

      <Button50 add50Cookies={add50Cookies} />
      {/* <button onClick={incrementCookies}> Buy 50 cookies </button> */}

      <Button100 add100Cookies={add100Cookies} />
      {/* <button onClick={incrementCookies}> Buy 100 cookies </button> */}

      {/* <button onClick={resetCookies}>Reset to 0</button> */}
      <CookieImage />
    </div>
  );
}

// create popup hurray "1000 cookies"
//
