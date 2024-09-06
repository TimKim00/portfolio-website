import StyledHr from "./StyledHr";
import PropTypes from "prop-types";
import styled from "styled-components";
import { React, useState, useRef } from "react";
import { Element } from "react-scroll";

// Icons
import LinkIcon from "../assets/externalLink.svg";
import CopyIcon from "../assets/copyIcon.svg";
import CopiedIcon from "../assets/clipboard.svg";
import Checkmark from "../assets/checkmark.svg";

export default function Footer({ divider = true }) {
  const [copied, setCopied] = useState(false);
  const clipboardRef = useRef(null);

  const handleMouseEnter = () => {
    if (clipboardRef.current) {
      clipboardRef.current.style.opacity = 1;
    }
  };

  const handleMouseLeave = () => {
    if (clipboardRef.current) {
      clipboardRef.current.style.opacity = 0;
    }
  };

  const handleClick = () => {
    if (clipboardRef.current) {
      navigator.clipboard.writeText("ystimokk@gmail.com");
      setTimeout(() => {
        setCopied(true);
      }, 200);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <Element name="footer">
      {divider && <StyledHr />}
      <FooterWrapper>
        <FooterContent>
          <Contact>
            <ContactHeader> Get in Touch </ContactHeader>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <Clipboard ref={clipboardRef}>
                <IconImg
                  draggable="false"
                  src={copied ? CopiedIcon : CopyIcon}
                  alt=""
                />
                <Text>{copied ? "Copied" : "Copy"}</Text>
                {copied && (
                  <IconImg
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: "auto",
                    }}
                    src={Checkmark}
                    alt=""
                  />
                )}
              </Clipboard>
              <AnimatedText secondary="true">ystimokk@gmail.com</AnimatedText>
            </div>
            <br />
            <a
              href="/Timothy_Kim_Resume_2024_.pdf"
              download
              style={{ textDecoration: "none", color: `inherit` }}
            >
              <AnimatedText>Download Resume</AnimatedText>
            </a>
          </Contact>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              justifyContent: "center",
            }}
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/yeonsu-kim-86961a218"
            >
              <AnimatedText>LinkedIn</AnimatedText>
              <IconImg draggable="false" src={LinkIcon} alt="" />
            </Link>
            <Link target="_blank" href="https://github.com/TimKim00">
              <AnimatedText>Github</AnimatedText>
              <IconImg src={LinkIcon} alt="" />
            </Link>
          </div>
        </FooterContent>
        <FooterContent>
          <Text>© {new Date().getFullYear()} Timothy Kim</Text>
          <Text>Built with React</Text>
          <Text secondary="true">California, USA</Text>
        </FooterContent>
      </FooterWrapper>
    </Element>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 5rem;
  margin-bottom: 8rem;
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactHeader = styled.span`
  margin: 0 -2px;
  z-index: 0;
  color: ${(props) => props.theme.main.fonts.primary};
  font-size: 2.25rem;
  font-weight: 300;
  line-height: 2.25rem;
  letter-spacing: -0.025em;
`;

const Clipboard = styled.div`
  position: absolute;
  width: 155px;
  translate: 0 -100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.footer.clipboard.background};
  border: 1px solid ${({ theme }) => theme.footer.clipboard.border};
  border-radius: 4px;
  padding: 12px 8px;
  margin-bottom: 4px;
  opacity: 0;
  transition: all 1s ease-in-out;
  transition: opacity 0.5s ease-in-out;
`;

const Text = styled.div`
  display: inline-block;
  display: flex;
  align-items: end;
  color: ${(props) =>
    props.secondary
      ? props.theme.main.fonts.secondary
      : props.theme.main.fonts.primary};
`;

const AnimatedText = styled(Text)`
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.footer.underline};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const IconImg = styled.img`
  width: 1.2rem;
  height: auto;
  draggable: false;
  filter: ${(props) => props.theme.footer.clipboard.filter};
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2px;
  color: black;
`;

Footer.propTypes = {
  divider: PropTypes.bool,
};
