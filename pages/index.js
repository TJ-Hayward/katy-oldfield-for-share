import { createClient } from "contentful";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import AuthContext from "../stores/authContext";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { StyledLanding } from "../components/styles/StyledLanding";
import CoolestSVG from "../components/CoolestSVG/CoolestSVG";
import InitialLoginRedirect from "../stores/initialLogin";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const Home = await client.getEntries({ content_type: "homeHero" });
  const Projects = await client.getEntries({ content_type: "miniProjects" });

  return {
    props: {
      homeStuff: Home.items,
      miniProject: Projects.items,
    },
  };
}
const Container = styled.div`
  .button {
    background-color: white;
  }
`;

export default function Home({ homeStuff, miniProject, hasReadPermission }) {
  const { user, login, loggedIn } = useContext(AuthContext);

  if (loggedIn) {
    return (
      <StyledLanding>
        <div className="fun_container">
          <Row>
            <yeseva-title>
              <div className="contents">OK</div>
            </yeseva-title>
          </Row>
        </div>
        {InitialLoginRedirect()}
      </StyledLanding>
    );
  }

  return (
    <StyledLanding>
      <div className="fun_container">
        <yeseva-title>
          <div className="svg_fun">
            <CoolestSVG />
          </div>
        </yeseva-title>
        <div className="button-holder">
          <div className="buttons" onClick={login}>
            <a>Login</a>
          </div>
        </div>
      </div>
    </StyledLanding>
  );
}
