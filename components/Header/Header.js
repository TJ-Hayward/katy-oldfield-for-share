import Link from "next/link";
import { StyledHeader } from "./StyledHeader";
import { Row, Col, Container } from "react-bootstrap";
import AuthContext from "../../stores/authContext";
import { useContext, useState, useEffect } from "react";

const Navbar = ({ page }) => {
  const { user, login } = useContext(AuthContext);

  const [device, setDevice] = useState("mobile");
  const deviceCheck = () => {
    if (window.innerWidth < 576) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  };
  useEffect(() => {
    deviceCheck();
    window.addEventListener("resize", () => {
      deviceCheck();
    });
  }, []);
  return (
    <StyledHeader page={page}>
      {/* <Row fluid className="header"> */}
      <ul>
        <li className="header-logo">
          {device !== "mobile" ? (
            <Link href="/projects">
              <a className="header_about">
                <katy-logo>KATY OLDFIELD</katy-logo>
              </a>
            </Link>
          ) : (
            <Link href="/projects">
              <a className="header_about">
                <katy-logo>KO</katy-logo>
              </a>
            </Link>
          )}
        </li>
        <li className="header-pages">
          <Link href="/about">
            <a className="header_about">ABOUT</a>
          </Link>
        </li>
        <li className="header-pages">
          <Link href="/projects">
            <a className="header_projects">PROJECTS</a>
          </Link>
        </li>
        {/* <li onClick={login}> Login/Signup</li> */}
      </ul>
      {/* </Row> */}
    </StyledHeader>
  );
};
export default Navbar;
