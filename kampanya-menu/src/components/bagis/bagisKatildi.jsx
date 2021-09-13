import React from "react";
import { Row } from "reactstrap";
import Alert from "@material-ui/lab/Alert";
const Katil5 = (props) => {
  return (
    <div>
      <div className="mySc">
        <Row>
          <Alert severity="success" variant="outlined">
            Bu Kampanyaya Katıldınız!
          </Alert>
        </Row>
      </div>
    </div>
  );
};

export default Katil5;
