import PropTypes from "prop-types";
import styled from "styled-components";

import CIcon from "../../assets/techIcons/c.svg";
import CssIcon from "../../assets/techIcons/css.svg";
import ExpressIcon from "../../assets/techIcons/express.svg";
import GitIcon from "../../assets/techIcons/git.svg";
import GoIcon from "../../assets/techIcons/go.svg";
import HtmlIcon from "../../assets/techIcons/html.svg";
import JavascriptIcon from "../../assets/techIcons/js.svg";
import JavaIcon from "../../assets/techIcons/java.svg";
import NodeIcon from "../../assets/techIcons/node.svg";
import MongoIcon from "../../assets/techIcons/mongo.svg";
import PostgresIcon from "../../assets/techIcons/postgres.svg";
import PythonIcon from "../../assets/techIcons/python.svg";
import ReactIcon from "../../assets/techIcons/react.svg";
import SqlIcon from "../../assets/techIcons/sql.svg";
import TailwindIcon from "../../assets/techIcons/tailwind.svg";
import StyledIcon from "../../assets/techIcons/styledComp.svg";
import SocketIcon from "../../assets/techIcons/socket.svg";
import WebIcon from "../../assets/techIcons/web.svg";
import AIIcon from "../../assets/techIcons/ai.svg";

import defaultTechIcon from "../../assets/techIcons/tech.svg";

export default function TagIcon({ tag }) {
  return (
    <TagIconWrapper className="tag" tagColor={TagMap[tag]}>
      <img
        src={TagMap[tag].image}
        alt=""
        style={{ width: "1.2rem", height: "1.2rem" }}
        draggable="false"
      />
      <InvertedText tagColor={TagMap[tag]}>{tag}</InvertedText>
    </TagIconWrapper>
  );
}

const TagMap = {
  react: {
    background: "rgba(204, 235, 255, 1)",
    color: "rgba(0, 82, 135, 1)",
    outline: "rgba(97, 218, 251, 1)",
    image: ReactIcon || defaultTechIcon,
  },
  javascript: {
    background: "rgba(255, 248, 199, 1)",
    color: "rgba(133, 100, 0, 1)",
    outline: "rgba(241, 224, 90, 1)",
    image: JavascriptIcon || defaultTechIcon,
  },
  typescript: {
    background: "rgba(189, 223, 255, 1)",
    color: "rgba(0, 60, 110, 1)",
    outline: "rgba(49, 120, 198, 1)",
    image: null || defaultTechIcon,
  },
  python: {
    background: "rgba(182, 210, 233, 1)",
    color: "rgba(0, 50, 80, 1)",
    outline: "rgba(53, 114, 165, 1)",
    image: PythonIcon || defaultTechIcon,
  },
  java: {
    background: "rgba(237, 194, 149, 1)",
    color: "rgba(80, 47, 0, 1)",
    outline: "rgba(176, 114, 25, 1)",
    image: JavaIcon,
  },
  "c++": {
    background: "rgba(255, 195, 215, 1)",
    color: "rgba(122, 0, 43, 1)",
    outline: "rgba(243, 75, 125, 1)",
    image: null || defaultTechIcon,
  },
  c: {
    background: "rgba(136, 136, 136, 1)",
    color: "rgba(0, 0, 0, 1)",
    outline: "rgba(85, 85, 85, 1)",
    image: CIcon || defaultTechIcon,
  },
  go: {
    background: "rgba(178, 230, 255, 1)",
    color: "rgba(0, 80, 120, 1)",
    outline: "rgba(0, 173, 216, 1)",
    image: GoIcon || defaultTechIcon,
  },
  sql: {
    background: "rgba(255, 197, 178, 1)",
    color: "rgba(100, 0, 0, 1)",
    outline: "rgba(228, 79, 38, 1)",
    image: SqlIcon || defaultTechIcon,
  },
  html: {
    background: "rgba(255, 197, 178, 1)",
    color: "rgba(102, 0, 0, 1)",
    outline: "rgba(228, 75, 35, 1)",
    image: HtmlIcon || defaultTechIcon,
  },
  css: {
    background: "rgba(177, 160, 203, 1)",
    color: "rgba(25, 0, 60, 1)",
    outline: "rgba(86, 61, 124, 1)",
    image: CssIcon || defaultTechIcon,
  },
  tailwind: {
    background: "rgba(180, 232, 228, 1)",
    color: "rgba(0, 65, 60, 1)",
    outline: "rgba(56, 178, 172, 1)",
    image: TailwindIcon || defaultTechIcon,
  },
  "styled-components": {
    background: "rgba(204, 235, 255, 1)",
    color: "rgba(0, 82, 135, 1)",
    outline: "rgba(97, 218, 251, 1)",
    image: StyledIcon || defaultTechIcon,
  },
  web: {
    background: "rgba(255, 248, 199, 1)",
    color: "rgba(133, 100, 0, 1)",
    outline: "rgba(241, 224, 90, 1)",
    image: WebIcon || defaultTechIcon,
  },
  node: {
    background: "rgba(202, 235, 190, 1)",
    color: "rgba(55, 97, 15, 1)",
    outline: "rgba(140, 198, 101, 1)",
    image: NodeIcon || defaultTechIcon,
  },
  mongo: {
    background: "rgba(184, 238, 178, 1)",
    color: "rgba(0, 80, 10, 1)",
    outline: "rgba(77, 179, 61, 1)",
    image: MongoIcon || defaultTechIcon,
  },
  socket: {
    background: "rgba(255, 195, 215, 1)",
    color: "rgba(122, 0, 43, 1)",
    outline: "rgba(243, 75, 125, 1)",
    image: SocketIcon || defaultTechIcon,
  },
  postgres: {
    background: "rgba(221, 232, 255, 1)",
    color: "rgba(33, 89, 150, 1)",
    outline: "rgba(51, 103, 175, 1)",
    image: PostgresIcon || defaultTechIcon,
  },
  testing: {
    background: "rgba(230, 230, 230, 1)",
    color: "rgba(100, 100, 100, 1)",
    outline: "rgba(150, 150, 150, 1)",
    image: null || defaultTechIcon,
  },
  AI: {
    background: "rgba(217, 243, 255, 1)",
    color: "rgba(33, 102, 153, 1)",
    outline: "rgba(0, 188, 255, 1)", 
    image: AIIcon || defaultTechIcon, 
  },
};

const TagIconWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.tagColor.background};
  border-radius: 5rem;
  outline: 3px solid ${(props) => props.tagColor.outline};
  font-size: 1rem;
  padding: 3px 8px;
  margin: 0;
  gap: 0.25rem;
  height: 1.5rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const InvertedText = styled.span`
  color: ${(props) => props.tagColor.color};
`;

TagIcon.propTypes = {
  tag: PropTypes.string.isRequired,
};
