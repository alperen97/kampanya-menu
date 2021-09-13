import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import { Button } from "reactstrap";
import { useStore } from "../../contextAPI/store/Provider";
import { setUSer } from "../../contextAPI/actions/LoginAction";
import { getDataProperty } from "../../services/kampanya_service";
import Baslik from "./baslik";
const Dumenli = (props) => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  const updateUserInfo = () => {
    user.seenStories.push(props.kampanya.CampaignId);
    dispatch(setUSer(user));
  };
  return (
    <div>
      <Button
        style={{
          backgroundImage:
            "url(https://i.ibb.co/wNqv9jk/Microsoft-Teams-image-6.png)",
          backgroundSize: 96,
          paddingRight: 11,
          paddingTop: 12,
          paddingLeft: 11,
          paddingBottom: 11,
        }}
        data-testid="btn"
        color="link"
        tag={RouterNavLink}
        to={`/story/${props.kampanya.CampaignId}`}
        onClick={updateUserInfo}
      >
        <ReactRoundedImage
          image={getDataProperty(props.kampanya, "MediaUrl")[0]}
          roundedColor="#a3002f"
          imageWidth="73"
          imageHeight="73"
          roundedSize="12"
          hoverColor="#a3002f"
        />
      </Button>
      {getDataProperty(props.kampanya, "Title")[0].length > 15 ? (
        <Baslik
          name={getDataProperty(props.kampanya, "Title")[0]}
          cls={"name"}
        />
      ) : (
        <p className="name"> {getDataProperty(props.kampanya, "Title")[0]} </p>
      )}
    </div>
  );
};

export default Dumenli;
