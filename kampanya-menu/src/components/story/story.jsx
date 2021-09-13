import React, { useState, useEffect } from "react";
import StoryPage from "./storyPage";
import "./story.css";
import { getDummy, getDataProperty } from "../../services/kampanya_service";
import PacmanLoader from "../loading/pacman";

const StoryApp = () => {
  const [kampanya, setKampanya] = useState([]);
  const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  useEffect(() => {
    getDummy(id)
      .then((response) => {
        setKampanya(getDataProperty(response.data, "ImageUrl")[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <div>
      {kampanya.length ? <StoryPage arr={kampanya} cmpId={id} /> : <PacmanLoader />}
    </div>
  );
};
export default StoryApp;
