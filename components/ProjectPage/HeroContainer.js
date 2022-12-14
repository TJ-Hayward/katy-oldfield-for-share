import React from "react";
import Image from "next/image";
import { StyledProjectHero } from "./styles/StyledHeroContainer";
import { Row, Col, Container } from "react-bootstrap";
import { StyledMarginWraperA } from "../MarginWraperA";
import { StyledMarginTop } from "../MarginTop";

export default function HeroSection({ project }) {
  const projectData = project.fields;
  return (
    <>
      <StyledProjectHero>
        <StyledMarginTop />
        {/* <StyledMarginTop />
        <StyledMarginTop style={{ "padding-top": "20px !important" }} /> */}
        <Image
          src={"https:" + projectData.projectImage.fields.file.url}
          alt={projectData.projectImage.fields.file.title}
          height={projectData.projectImage.fields.file.details.image.height}
          width={projectData.projectImage.fields.file.details.image.width}
          loading="lazy"
        />
        <StyledMarginWraperA>
          <div className="title">
            <ibm-semi>{projectData.title}</ibm-semi>
          </div>
          <div className="role">
            <openSansSmall> {projectData.role}</openSansSmall>
          </div>
          <div className="paragraph">
            <ibm-body> {projectData.mainParagraph}</ibm-body>
          </div>
        </StyledMarginWraperA>
      </StyledProjectHero>
    </>
  );
}
