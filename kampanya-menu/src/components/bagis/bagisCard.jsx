import React from "react";
import { Button, Card, CardImg, CardImgOverlay } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import { getDataProperty } from "../../services/kampanya_service";
const BagisCard = (props) => {
  return (
    <div className="exdiv">
      <Card
        color="link"
        style={{ borderColor: "#205296", height:"270px" }}
      >
        <CardImg
          src={getDataProperty(props.kampanya,"ExternalLink")[0]}
          alt="Card image cap"
          width="100%"
          height="100%"
          style={{padding:"1px"}}
        />
        <CardImgOverlay>
          <div style={{ paddingTop: "205px" }}>
            <Button
              color="danger"
              style={{ borderRadius: "10px" }}
              tag={RouterNavLink}
              to={`/bagis/${props.kampanya.CampaignId}`}
            >
              Detaylı Bilgi
            </Button>
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default BagisCard;
