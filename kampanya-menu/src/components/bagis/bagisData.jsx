import React, { useState, useEffect } from "react";
import { getDonations } from "../../services/kampanya_service";
import BagisPage from "./bagisListe";
import PacmanLoader from "../loading/pacman";
const BagisData = () => {
  const [kampanyalar, setKampanylar] = useState([]);
  useEffect(() => {
    getKampanyalar();
  }, []);
  const getKampanyalar = () => {
    getDonations()
      .then((response) => {
        setKampanylar(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <main role="main">
        {kampanyalar.length ? (
          <BagisPage arr={kampanyalar}/>
        ) : (
            <PacmanLoader />
        )}
      </main>
    </div>
  );
};

export default BagisData;
