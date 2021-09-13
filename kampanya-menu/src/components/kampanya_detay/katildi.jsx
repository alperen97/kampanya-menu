import React from "react";
import { Row, Button } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./page.css";
import Alert from "@material-ui/lab/Alert";
const Katil2 = (props) => {
  return (
    <div>
      <div className="mySc">
        <Row>
          <Alert severity="success" variant="outlined"> {{/*variant="filled" */}}
            Bu Kampanyaya Katıldınız!
          </Alert>
        </Row>
      </div>
      <div className="myDiv">
        <Row>
          <Button
            className="button"
            color="primary"
            style={{ borderRadius: "30px" }}
            tag={RouterNavLink}
            to={"/anasayfa"}
          >
            Geri Dön
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Katil2;
