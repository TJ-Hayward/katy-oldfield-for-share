import { createClient } from "contentful";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Header/Header";
import FunImage from "../../components/FunImage/FunImage";
import AuthContext from "../../stores/authContext";
import { useContext } from "react";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedIn";
import NotLoggedInRedirect from "../../stores/notLoggedIn";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const Home = await client.getEntries({ content_type: "projectMainImages" });

  return {
    props: {
      mainImages: Home.items,
    },
  };
}
const StyledHeader = styled.div`
  .header_link {
    .project {
      font-weight: bold;
    }
  }
`;

const Home = ({ mainImages }) => {
  const { user, login, loggedIn } = useContext(AuthContext);

  if (loggedIn) {
    return (
      <>
        {mainImages.map((mainImages) => (
          <>
            <StyledHeader>
              <Navbar page="projects" />
            </StyledHeader>
            <FunImage key={mainImages.sys.id} mainImages={mainImages} />
          </>
        ))}
      </>
    );
  }
  NotLoggedInRedirect();

  return (
    <>
      <NotLoggedIn />
    </>
  );
};

export default Home;
