import { React, useState, useEffect, useRef } from "react";
import StyledHr from "../components/StyledHr";
import SkillsSummary from "../components/summaries/SkillsSummary";
import styled from "styled-components";
import { Element, Link } from "react-scroll";
import MovingText from "../components/MovingText";
import PostSummary from "../components/summaries/PostSummary";

// previews
import MessengerPreview from "../assets/projects/messenger-app-demo.mp4";
import BlogPreview from "../assets/projects/blog.svg";
import PacmanPreview from "../assets/projects/PacMan.mp4";
import ShoppingPreview from "../assets/projects/shopping-cart-demo.mp4";

export default function HomePage() {
  const projects = [
    {
      title: "Messenger",
      description:
        "Real-time chat app built with the MERN stack and Socket.io, featuring cookie-based OAuth authentication. Hosted on Render, with a minor issue in cross-origin cookie settings.",
      preview: MessengerPreview,
      link: "https://messaging-app-2hys.onrender.com",
      github: "https://github.com/TimKim00/Messaging-app",
      tags: [
        "socket",
        "web",
        "react",
        "node",
        "mongo",
        "javascript",
        "html",
        "tailwind",
        "css",
      ],
    },
    {
      title: "Pacman AI",
      description:
        "Multiagent Pacman game built with python and pacman library. Multiple algorithms, such as Q-Learning, pruned minimax, and inference methods were tested.",
      preview: PacmanPreview,
      link: "https://inst.eecs.berkeley.edu/~cs188/sp24/projects/#the-pac-man-projects",
      tags: ["AI", "python"],
    },
    {
      title: "Blog API",
      description:
        "A RESTful API using Node.js, Express, PostgreSQL, and JWT, with full CRUD for posts and comments. Thoroughly tested with Mocha and Chai (~85% coverage).",
      previewImage: BlogPreview,
      link: "",
      github: "https://github.com/TimKim00/BlogAPI",
      tags: ["testing", "postgres", "node", "javascript"],
    },
    {
      title: "Shopping Cart",
      description:
        "A mock e-commerce website that handles simple cart and checkout functionality. Developed with React and react router library. Utilized Fakestore API to fetch data.",
      preview: ShoppingPreview,
      fontSize: 1.85,
      link: "https://shopping-cart-gamma-ruddy.vercel.app/",
      github: "https://github.com/TimKim00/shopping-cart",
      tags: ["react", "javascript", "html", "css"],
    },
  ];

  const [showIntro, setShowIntro] = useState(false);
  const introRef = useRef(null);

  const handleMouseEnter = () => {
    setShowIntro(true);
  };

  const handleClickOutside = (e) => {
    if (introRef.current && !introRef.current.contains(e.target)) {
      setShowIntro(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Intro */}
      <Element name="intro">
        <HeaderContainer>
          <MainHeader id="home" translate={showIntro}>
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
          <HoverText onMouseEnter={handleMouseEnter} show={!showIntro}>
            {" "}
            Get to know me better! <EmojiAnimation>👋</EmojiAnimation>{" "}
          </HoverText>
          <SubContainer show={showIntro} ref={introRef}>
            <SubHeader>
              Hi, I’m <SpecialText>Yeonsu (Timothy) Kim</SpecialText>, a UC
              Berkeley graduate with a background in Computer Science. I’m
              proficient in <SpecialText>JavaScript</SpecialText>,{" "}
              <SpecialText>Python</SpecialText>, <SpecialText>C</SpecialText>,{" "}
              <SpecialText>Java</SpecialText>, and{" "}
              <SpecialText>SQL</SpecialText>, with strong knowledge in areas
              like <SpecialText>database design</SpecialText>,{" "}
              <SpecialText>web security</SpecialText>,{" "}
              <SpecialText>optimization</SpecialText>, and{" "}
              <SpecialText>operating systems</SpecialText>. My projects range
              from developing{" "}
              <SpecialText>full-stack web applications</SpecialText> to building
              secure, scalable systems. I’m passionate about delivering
              efficient, well-architected solutions and solving real-world
              problems through technology. Explore my portfolio to see my work!
            </SubHeader>
            <Buttons>
              <a
                href="/Timothy_Kim_Resume_2024_.pdf"
                download
                style={{ textDecoration: "none", color: `inherit` }}
              >
                <ThemeButton>Download Resume</ThemeButton>
              </a>
              <Link to="footer">
                <SimpleButton>Contact Me</SimpleButton>
              </Link>
            </Buttons>
          </SubContainer>
        </HeaderContainer>
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
              fontSize={project.fontSize}
              description={project.description}
              link={project.link}
              github={project.github}
              tags={project.tags}
            />
          ))}
          <AnimateWrapper>
            <PostRedirect href="https://github.com/TimKim00" target="_blank">
              <AnimatedText>View More</AnimatedText>
            </PostRedirect>
          </AnimateWrapper>
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

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${(props) => props.theme.main.fonts.primary};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 10rem 0;
`;

const MainHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 4.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: transform 0.6s ease;
  transform: translateY(${(props) => (props.translate ? "0" : "10rem")});
`;

const HoverText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.2rem;

  transition: opacity 0.6s ease, transform 0.6s ease;
  /* Default hidden state */
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) =>
    props.show ? "translateY(10rem)" : "translateY(calc(10rem-10px))"};
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
`;

const SubContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transition: opacity 0.6s ease, transform 0.6s ease;

  /* Default hidden state */
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(-10px)")};
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
`;

const SubHeader = styled.div`
  gap: 0.7rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: left;
  line-height: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 6rem;
`;

const Button = styled.button`
  border-radius: 32px;
  border: none;
  width: 8rem;
  min-height: 3.3rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
`;

const ThemeButton = styled(Button)`
  background-color: ${(props) => props.theme.main.fonts.special};
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.main.fonts.toggle};
  }
`;

const SimpleButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.main.fonts.primary};
  color: ${(props) => props.theme.main.fonts.primary};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.main.fonts.primary};
    color: ${(props) => props.theme.main.fonts.invert};
  }
`;

const SpecialText = styled.span`
  color: ${(props) => props.theme.main.fonts.special};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.main.fonts.toggle};
  }
`;

const EmojiAnimation = styled.div`
  //https://codepen.io/jakejarvis/pen/pBZWZw

  animation-name: wave;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
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

const AnimateWrapper = styled.div`
  grid-column: 1 / 3;
  transition: transform 0.3s ease-in;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostRedirect = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.main.fonts.secondary};
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.main.fonts.primary};
  }
`;

const AnimatedText = styled.span`
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
  text-align: start;
`;
