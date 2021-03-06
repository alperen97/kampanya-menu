import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./page.css";
import { getDummy, getCustomerDefined } from "../../services/kampanya_service";
import DetayPage from "./detayPage";
import PacmanLoader from "../loading/pacman";
import { useStore } from "../../contextAPI/store/Provider";
const Detay = () => {
  const history = useHistory();
  const handleOnClickKmp = useCallback(() => history.push("/error"), [history]);
  const [kampanya, setKampanya] = useState(null);
  const [isAttendance, setAttendance] = useState(false);
  const [isLoad, setLoad] = useState(null);
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  useEffect(() => {
    getDummy(id)
      .then((response) => {
        setKampanya(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    getCustomerDefined(user.customerNo)
      .then((response) => {
        if (response.data) {
          // eslint-disable-next-line
          response.data.map((value, index) => {
            // eslint-disable-next-line
            if (value.CampaignId == id) {
              // eslint-disable-next-line
              if (value.CustomerEnrollmentStatus == 1) {
                setAttendance(true);
                setLoad(true);
              } else {
                setAttendance(false);
                setLoad(true);
              }
            }
          });
          setLoad(true);
        } else {
          handleOnClickKmp();
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {kampanya && isLoad ? (
        <DetayPage kmp={kampanya} atd={isAttendance} />
      ) : (
        <PacmanLoader />
      )}
    </div>
  );
};

export default Detay;
