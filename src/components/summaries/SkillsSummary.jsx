import styled from "styled-components";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useState, useEffect } from "react";

// Icons
import CIcon from "../../assets/techIcons/c.svg";
import CssIcon from "../../assets/techIcons/css.svg";
import ExpressIcon from "../../assets/techIcons/express.svg";
import ExpressDarkIcon from "../../assets/techIcons/express-dark.svg";
import GitIcon from "../../assets/techIcons/git.svg";
import GoDarkIcon from "../../assets/techIcons/go-dark.svg";
import GoIcon from "../../assets/techIcons/go.svg";
import HtmlIcon from "../../assets/techIcons/html.svg";
import JavascriptIcon from "../../assets/techIcons/js.svg";
import JavaIcon from "../../assets/techIcons/java.svg";
import JavascriptDarkIcon from "../../assets/techIcons/js-dark.svg";
import NodeIcon from "../../assets/techIcons/node.svg";
import MongoIcon from "../../assets/techIcons/mongo.svg";
import PostgresIcon from "../../assets/techIcons/postgres.svg";
import PythonIcon from "../../assets/techIcons/python.svg";
import ReactIcon from "../../assets/techIcons/react.svg";
import SqlIcon from "../../assets/techIcons/sql.svg";
import TailwindIcon from "../../assets/techIcons/tailwind.svg";
import PythonDarkIcon from "../../assets/techIcons/python-dark.svg";
import StyledIcon from "../../assets/techIcons/styledComp.svg";
import StyledDarkIcon from "../../assets/techIcons/styledComp-dark.svg";

export default function SkillsSummary() {
  const { theme } = useThemeContext();
  const [currentTheme, setCurrentTheme] = useState(theme.type);

  useEffect(() => {
    setCurrentTheme(theme.type);
  }, [theme]);

  const languages = [
    {
      id: "javascript",
      img: JavascriptIcon,
      imgDark: JavascriptDarkIcon,
      icon: "Javascript",
      area: "a",
    },
    {
      area: "b",
      id: "python",
      img: PythonIcon,
      imgDark: PythonDarkIcon,
      icon: "Python",
    },
    { id: "c", img: CIcon, icon: "C", area: "c" },
    { id: "java", img: JavaIcon, icon: "Java", area: "d" },
    { id: "go", img: GoIcon, imgDark: GoDarkIcon, icon: "Go", area: "e" },
    { id: "sql", img: SqlIcon, icon: "SQL", area: "f" },
    { id: "html", img: HtmlIcon, icon: "HTML", area: "g" },
    { id: "css", img: CssIcon, icon: "CSS", area: "h" },
  ];

  const tools = [
    { id: "react", img: ReactIcon, icon: "React", area: "a" },
    { id: "node", img: NodeIcon, icon: "Node.js", area: "b" },
    {
      id: "express",
      img: ExpressIcon,
      imgDark: ExpressDarkIcon,
      icon: "Express",
      area: "c",
    },
    { id: "mongodb", img: MongoIcon, icon: "MongoDB", area: "d" },
    { id: "postgres", img: PostgresIcon, icon: "PostgreSQL", area: "e" },
    { id: "git", img: GitIcon, icon: "Git", area: "f" },
    { id: "tailwind", img: TailwindIcon, icon: "Tailwind", area: "g" },
    {
      id: "styled-components",
      img: StyledIcon,
      imgDark: StyledDarkIcon,
      icon: "Styled Components",
      area: "h",
    },
  ];

  return (
    <>
      <HeaderTitle>My <HeaderTitleColored>Skills</HeaderTitleColored></HeaderTitle>
      <SkillsContainer>
        <SkillsBody>
          <SkillsTitle>Languages</SkillsTitle>
          <SkillsContent>
            {languages.map((language) => (
              <SkillItem key={language.id} style={{ gridArea: language.area }}>
                <SkillIcon
                  src={
                    currentTheme === "dark"
                      ? language.imgDark || language.img
                      : language.img
                  }
                  alt={language.icon}
                  draggable="false"
                />
                <Text>{language.icon}</Text>
              </SkillItem>
            ))}
          </SkillsContent>
        </SkillsBody>
        <SkillsBody>
          <SkillsTitle>Technologies</SkillsTitle>
          <SkillsContent>
            {tools.map((tool) => (
              <SkillItem key={tool.id} style={{ gridArea: tool.area }}>
                <SkillIcon
                  src={
                    currentTheme === "dark"
                      ? tool.imgDark || tool.img
                      : tool.img
                  }
                  alt={tool.icon}
                  draggable="false"
                />
                <Text>{tool.icon}</Text>
              </SkillItem>
            ))}
          </SkillsContent>
        </SkillsBody>
      </SkillsContainer>
    </>
  );
}

const HeaderTitle = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: 300;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: center;
  margin-bottom: 1.5rem;
`
const HeaderTitleColored = styled(HeaderTitle)`
  padding-left: 0.5rem;
  color: ${(props) => props.theme.main.fonts.special};
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin: 0 5rem;
  margin-bottom: 7rem;
`;

const SkillsBody = styled.div`
  border: 2px solid ${(props) => props.theme.portfolio.border};
  background-color: ${(props) => props.theme.portfolio.background};
  width: 28rem;
  padding: 1rem;
  padding-bottom: 3rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  box-shadow: inset 0px -10px 30px -10px
    ${(props) => props.theme.portfolio.border};

  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;

const SkillsTitle = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: center;
`;

const SkillsContent = styled.ul`
  display: grid;
  gap: 3.5rem 0;
  grid-template-areas:
    "a . b . c"
    ". d . e ."
    "f . g . h";

  padding: 1rem 2.5rem;
`;

const SkillItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 4rem;
`;

const SkillIcon = styled.img`
  width: 3rem;
  height: 3rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Text = styled.span`
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.main.fonts.primary};
`;
