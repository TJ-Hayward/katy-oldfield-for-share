import React, { useEffect, useState } from "react";
import { StyledLanding } from "../styles/StyledLanding";
import { Row } from "react-bootstrap";

const NotLoggedIn = () => {
  return (
    <StyledLanding>
      <div className="fun_container">
        <Row>
          <yeseva-loggedin>
            <div className="contents1">Are you logged in?</div>
          </yeseva-loggedin>
        </Row>
      </div>
    </StyledLanding>
  );
};

export default NotLoggedIn;
