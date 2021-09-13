import React, { useCallback } from "react";
import Stories from "react-insta-stories";
import "./story.css";
import storyContent from "./style.json";
import { useHistory, NavLink as RouterNavLink } from "react-router-dom";
import { WithSeeMore } from "react-insta-stories";
import { Button } from "reactstrap";

const StoryPage = (props) => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/anasayfa"), [history]);
  const str = [];
  // eslint-disable-next-line
  
  const obja = {
    content: ({ action, story }) => {
      return (
        <WithSeeMore story={story} action={action}>
          <div
            style={{
              background: "#FFFFFF",
             //paddingler burada
              height: "100%",
            }}
          >
            <img
              style={{ maxHeight: "100%", maxWidth: "100%", width: "446px",height:"600px" }}
              alt="teast"
              src={props.arr}
            ></img>
          </div>
        </WithSeeMore>
      );
    },
    seeMoreCollapsed: ({ toggleMore, action }) => (
      <p
        onClick={() => toggleMore(true)}
        style={{ paddingBottom: "0px", paddingLeft: "130px" }}
      >
        <Button
          color="danger"
          style={{ borderRadius: "30px", width: "200px" }}
          tag={RouterNavLink}
          to={`/strdetay/${props.cmpId}`}
        >
          Detaylı Bilgi
        </Button>
      </p>
    ),
    seeMore:
      ({ close }) =>
      ({ toggleMore, action }) =>
        <p onClick={() => toggleMore(true)}></p>,
    duration: 5000,
  };
  str.push(obja);
  return (
    <div className="story" data-testid="detay">
      <Stories
        stories={str}
        defaultInterval={1500}
        width={444}
        height={600}
        storyStyles={storyContent}
        onAllStoriesEnd={handleOnClick}
      />
    </div>
  );
};
export default StoryPage;