import React, { useState, useEffect } from "react";
import { Navbar, Row } from "reactstrap";
import Kampanyalar from "./kampanyalar";
import Circle from "./circle";
import { Paper } from "@material-ui/core";
import Sticky from "wil-react-sticky";
import { reveal as Menu } from "react-burger-menu";
import "./nav_test.css";
import "./common.css";
import Menu2 from "../menu/menu3";
const Header = (props) => {
  // eslint-disable-next-line
  const [isFirst, setFirst] = useState(false);
  useEffect(() => {
    setFirst(false);
  }, []);
  return (
    <div>
      <main role="main">
        <Sticky>
          <header>
            <Menu width="270px" noOverlay noTransition>
              <Menu2 close={"close"} />
            </Menu>
            <Paper elevation={23}>
              <Row>
                <img
                  src="https://i.ibb.co/L6jr4zq/test5.png"
                  alt="head"
                  width="100%"
                  height="70"
                />
              </Row>
              <Row>
                <Navbar color="link" link>
                  {props.str.map((kmp, index) => {
                    return <Circle kampanya={kmp} />;
                  })}
                </Navbar>
              </Row>
            </Paper>
          </header>
        </Sticky>
        <div className="myColor">
          {props.def.map((value, index) => {
            return (
              <Row>
                <div>
                  <Kampanyalar kampanya={value} />
                </div>
              </Row>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Header;
