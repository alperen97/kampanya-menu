import React, { useState, useEffect } from "react";
import GirisPage from "./girisPage";
import LoginPage from "../login/LoginPage2";
const GirisData = () => {
  const [kampanyalar, setKampanylar] = useState(false);
  useEffect(() => {
    waitFunction();
    // eslint-disable-next-line
  }, []);
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const waitFunction = async () => {
    await delay(2000);
    setKampanylar(true);
  };
  return (
    <div>
      <main role="main">
        {kampanyalar ? (
          <LoginPage/>
        ) : (
            <GirisPage/>
        )}
      </main>
    </div>
  );
};

export default GirisData;