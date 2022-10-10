import { createClient } from "contentful";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Header/Header";
import FunImage from "../../components/FunImage/FunImage";
import AuthContext from "../../stores/authContext";
import { useContext } from "react";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedIn";

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
  // const [colour, setColour] = useState("white");
  // const colourCheck = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 500 && window.scrollY < 1000) {
  //     setColour("yellow");
  //   } else if (window.scrollY > 1000 && window.scrollY < 1200) {
  //     setColour("blue");
  //     console.log(window.scrollY);
  //   } else {
  //     setColour("white");
  //   }
  // };
  // useEffect(() => {
  //   colourCheck();
  //   window.addEventListener("scroll", () => {
  //     colourCheck();
  //   });
  // }, []);
  // const router = useRouter();

  // if (!hasReadPermission) {
  //   return <Login redirectPath={router.asPath} />;
  // }
  // if (!hasReadPermission) {
  //   return <div>Access denied.</div>;
  // }
  const router = useRouter();
  const { user, login, loggedIn } = useContext(AuthContext);
  // if (!loggedIn) {
  //   router.replace("/");
  // }

  if (!loggedIn) {
    setTimeout(() => router.replace("/"), 200);
  }

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

  return (
    <>
      <NotLoggedIn />
    </>
  );
};

export default Home;
