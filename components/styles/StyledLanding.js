import styled from "styled-components";

export const StyledLanding = styled.div`
  .fun_container {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #0e431d;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* overflow-y: hidden;
    overflow-x: hidden; */
  }
  .contents {
    text-align: center;
    height: 100%;
    width: 100%;
    /* margin-block: 0px; */
    background-color: #0e431d;
    color: white;
    @media only screen and (max-width: 576px) {
      font-size: 250px;
      line-height: 250px;
    }
    @media only screen and (min-width: 576px) {
      font-size: 400px;
      line-height: 400px;
    }
    @media only screen and (min-width: 1020px) {
      font-size: 600px;
      line-height: 600px;
    }
  }
  /* .button-holder {
    align-items: center;
    position: relative;
    left: 45%;
  } */
  .buttons {
    position: relative;
    text-align: center;
    color: black;
    background-color: white;
    padding: 1rem 2rem 1rem 2rem;
  }
`;
