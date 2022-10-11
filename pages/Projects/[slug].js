import { createClient } from "contentful";
import React, { useContext, useEffect } from "react";
import HeroSection from "../../components/ProjectPage/HeroContainer";
import BigImages from "../../components/ProjectPage/BigImages";
import Testimonials from "../../components/ProjectPage/Testimonials";
import { useRouter } from "next/router";
import Navbar from "../../components/Header/Header";
import { StyledProjectSlug } from "../../components/styles/StyledProjectSlug";
import AuthContext from "../../stores/authContext";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedIn";
import NotLoggedInRedirect from "../../stores/notLoggedIn";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });
  return {
    props: { project: items[0] },
  };
}

export default function FullProject({ project }) {
  const { user, login, loggedIn } = useContext(AuthContext);
  if (loggedIn) {
    return (
      <>
        <>
          <Navbar />
          <StyledProjectSlug>
            <HeroSection project={project} />

            <BigImages project={project} />

            <Testimonials project={project} />
          </StyledProjectSlug>
        </>
      </>
    );
  }
  NotLoggedInRedirect();
  return <NotLoggedIn />;
}
