import StyledHr from "../components/StyledHr";
import SkillsSummary from "../components/summaries/SkillsSummary";
import styled from "styled-components";
import { Element } from "react-scroll";
import MovingText from "../components/MovingText";
import PostSummary from "../components/summaries/PostSummary";

// previews
import MessengerPreview from "../assets/projects/messenger-app-demo.mp4";
import BlogPreview from "../assets/projects/blog.svg";
import PacmanPreview from "../assets/projects/PacMan.mp4"

export default function HomePage() {
  const projects = [
    {
      title: "Messenger",
      description: "Real-time chat app built with the MERN stack and Socket.io, featuring cookie-based OAuth authentication. Hosted on Render, with a minor issue in cross-origin cookie settings.",
      preview: MessengerPreview,
      link: "https://messaging-app-2hys.onrender.com",
      github: "https://github.com/TimKim00/Messaging-app",
      tags: ["socket", "web", "react", "node", "mongo"],
    },
    {
      title: "Pacman AI",
      description: "Multiagent Pacman game built with python and pacman library. Multiple algorithms, such as Q-Learning, pruned minimax, and inference methods were tested.",
      preview: PacmanPreview,
      link: "https://inst.eecs.berkeley.edu/~cs188/sp24/projects/#the-pac-man-projects",
      tags: ["AI", "python" ],
    },
    {
      title: "Blog API",
      description: "A RESTful API using Node.js, Express, PostgreSQL, and JWT, with full CRUD for posts and comments. Thoroughly tested with Mocha and Chai.",
      previewImage: BlogPreview,
      link: "",
      github: "https://github.com/TimKim00/BlogAPI",
      tags: ["node", "postgres", "testing"],
    },
  ];

  return (
    <>
      {/* Intro */}
      <Element name="intro">
        <MainHeader id="home">
          <span>Hi! I am</span>
          <MovingText
            texts={[
              "Timothy Kim",
              "a Frontend Developer",
              "a Backend Developer",
            ]}
          />
          <span style={{ marginLeft: "-0.8rem" }}>.</span>
        </MainHeader>
      </Element>
      <StyledHr />
      {/* Posts */}
      <Element name="posts">
        <PostWrapper>
          {projects.map((project) => (
            <PostSummary
              key={project.title}
              title={project.title}
              preview={project.preview}
              previewImage={project.previewImage}
              description={project.description}
              link={project.link}
              github={project.github}
              tags={project.tags}
            />
          ))}
        </PostWrapper>
      </Element>
      {/* Skills */}
      <StyledHr />
      <Element name="about">
        <SkillsSummary />
      </Element>
    </>
  );
}

const MainHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-size: 4.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: center;
  margin-bottom: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: center;
  margin: 1.5rem 0;
  justify-content: center;
  gap: 1rem;
`;
