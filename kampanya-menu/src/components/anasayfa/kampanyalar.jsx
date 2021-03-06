import React from "react";
import { Button,Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./common.css";
import { getDataProperty } from "../../services/kampanya_service";

const Kampanya = (props) => {
  return (
    <div className= "exdiv">
      <Card color="link" style={{ borderColor: '#205296', height:"270px" }}>
        <CardImg 
          src={getDataProperty(props.kampanya,"ImageUrl")[0]}
          alt="Card image cap"
          width="100%"
          height="80%"
          style={{padding:"1px"}}
        />
        <CardImgOverlay>
          {props.kampanya.CampaignName.length > 25 ? <div style={{ paddingTop:"202px" , marginLeft:"255px" }}>  <Button
            color="danger"
            style={{borderRadius:"10px" }}
            tag={RouterNavLink}
            to={`/detay/${props.kampanya.CampaignId}`}
          >{getDataProperty(props.kampanya,"ShortExplanation")[0]}</Button>
          </div> : <div style={{ paddingTop:"205px" , marginLeft:"255px" }}>  <Button
            color="danger"
            style={{borderRadius:"10px" }}
            tag={RouterNavLink}
            to={`/detay/${props.kampanya.CampaignId}`}
          >{getDataProperty(props.kampanya,"ShortExplanation")[0]}</Button>
          </div> }

        </CardImgOverlay>
        <div style={{width:"250px"}}>
        
        {props.kampanya.CampaignName.length < 25 ? <CardTitle className="cardTitle2">{props.kampanya.CampaignName}<br/></CardTitle> :
         <CardTitle className="cardTitle">{props.kampanya.CampaignName}</CardTitle>}
        </div>
      </Card>
    </div>
  );
};

export default Kampanya;
