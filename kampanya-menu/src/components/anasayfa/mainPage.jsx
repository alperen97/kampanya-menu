import React, { useState, useEffect } from "react";
import { getStories,getDefaults } from "../../services/kampanya_service";
import Main from "./header";
import PacmanLoader from "../loading/pacman";
import "./common.css";
const MainPage = () => {
  const [stories, setStories] = useState([]);
  const [defaults, setdefaults] = useState([]);
  useEffect(() => {
    getStory();
    getDefults();
  }, []);
  const getStory = () => {
    getStories()
      .then((response) => {
        setStories(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getDefults = () => {
    getDefaults()
      .then((response) => {
        setdefaults(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <main role="main">
        {stories.length &&  defaults.length ? <Main str={stories}  def={defaults} /> : <PacmanLoader />}
      </main>
    </div>
  );
};

export default MainPage;
