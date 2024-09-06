import styled from "styled-components";
import { React, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";
import { Link, Events, scrollSpy } from 'react-scroll';

import LightIcon from "../assets/sun.svg";
import DarkIcon from "../assets/moon.svg";

export default function Nav() {
  const nodeRef = useRef(null);
  const location = useLocation();
  const navListRef = useRef(null);
  const navItemRefs = useRef({});
  const { theme, toggleTheme } = useThemeContext();

  // const [selectedTab, setSelectedTab] = useState(
  //   String(location.pathname).match(/[^/]+/g) === null
  //     ? "home"
  //     : String(location.pathname).match(/[^/]+/g)[0]
  // );

  const [selectedTab, setSelectedTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [panelStyle, setPanelStyle] = useState({});
  const [bottomPosition, setBottomPosition] = useState("5%");

  const handleMouseEnter = (e) => {
    setHoveredTab(e.target.id);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  const handleClick = (e) => {
    setSelectedTab(e.target.id);
  };

  const activeTab = hoveredTab || selectedTab;

  const navIcons = [
    { id: "home", to: "intro", icon: "Home"},
    // { id: "project", to: "/project", icon: "Projects" },
    { id: "post", to: "posts", icon: "Posts" },
    { id: "about", to: "about", icon: "About" },
  ];

  const panelRadius = {
    home: "32px 4px 4px 32px",
    about: "4px 32px 32px 4px",
    post: "4px",
    theme: "50%",
  };

  // Update panel position when active tab changes
  useEffect(() => {
    if (navItemRefs.current[activeTab]) {
      // const { offsetLeft, offsetWidth } = navItemRefs.current[activeTab];
      const index = navItemRefs.current[activeTab].props.index;
      setPanelStyle({
        width: "5rem", // offsetWidth
        transform: `translateX(calc(${index * 5}rem + ${index * 4}px))`, // offsetLeft
        borderRadius: panelRadius[activeTab],
      });
    }
  }, [activeTab]);

  return (
    <NavWrapper ref={nodeRef} style={{ bottom: bottomPosition }} className="nav">
      <NavList ref={navListRef}>
        <BackgroundPanel style={panelStyle} />
        {navIcons.map((tab, index) => (
          <NavListItem
            key={tab.id}
            id={tab.id}
            to={tab.to}
            spy={true}
            active={String(activeTab === tab.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick}
            draggable={false}
            ref={(el) => (navItemRefs.current[tab.id] = el)}
            duration={500}
            index={index}
            onSetActive={() => setSelectedTab(tab.id)}
          >
            {tab.icon}
          </NavListItem>
        ))}
        <StyledVerticalLine>&nbsp;</StyledVerticalLine>
        <NavIconItem id="theme" onClick={toggleTheme} draggable={false}>
          <IconImg draggable="false" src={theme.type === "dark" ? LightIcon : DarkIcon} alt="" />
        </NavIconItem>
      </NavList>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.nav.background};
  border: 8px solid ${({ theme }) => theme.nav.background};
  box-sizing: border-box;
  margin: 0px;
  color: ${({ theme }) => theme.nav.fonts.primary};
  border-radius: 64px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  bottom: 5%;
  left: 52%;
  transform: translateX(-52%);
  box-shadow: 0px 6px 16px -5px ${({ theme }) => theme.nav.shadow};

  outline: 1px solid ${({ theme }) => theme.nav.border};
  transition: bottom 0.3s ease;
`;

const NavList = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const BackgroundPanel = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.nav.panelBackground};
  box-sizing: border-box;
  outline: 1px solid ${({ theme }) => theme.nav.panelBorder};
  outline-offset: -1px;
  transition: width 0.3s ease, transform 0.3s ease-in-out,
    border-radius 0.5s ease;
  z-index: 101;

  width: 5rem;
`;

const NavListItem = styled(Link)`
  cursor: pointer;
  color: white;
  font-weight: lighter;
  padding: 8px 0px;
  text-decoration: none;
  width: 5rem;
  text-align: center;
  z-index: 102;
`;

const IconImg = styled.img`
  width: 1.2rem;
  height: auto;
  filter: invert(1);
`;

const NavIconItem = styled(NavListItem)`
  width: 2.25rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  outline-offset: -1px;
  transition: width 0.3s ease, transform 0.3s ease-in-out,
    border-radius 0.5s ease;

  &:hover {
    outline: 1px solid ${({ theme }) => theme.nav.panelBorder};
    background-color: ${({ theme }) => theme.nav.panelBackground};
  }
`;

const StyledVerticalLine = styled.div`
  border-right: 2px solid ${({ theme }) => theme.nav.panelBackground};
  height: 1.5rem;
  margin: 0 4px;
`;
