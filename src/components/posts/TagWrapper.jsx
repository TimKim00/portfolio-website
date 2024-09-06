import TagIcon from "./TagIcon";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

export default function TagWrapper({ tags }) {
  const [showTooltip, setShowTooltip] = useState(false); // State to track tooltip visibility
  const tooltipRef = useRef(null); // Ref for tooltip to detect outside clicks

  const displayTags = tags.slice(0, 2);

  const handleToggleTooltip = () => {
    setShowTooltip((prev) => !prev); // Toggle tooltip visibility
  };

  // Close tooltip when clicked outside
  const handleClickOutside = (e) => {
    if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TagIconWrapper>
      {displayTags.map((tag, index) => (
        <TagIcon key={index} tag={tag} />
      ))}

      {tags.length > 2 && (
        <>
          <InvertedText onClick={handleToggleTooltip}>...</InvertedText>

          <Tooltip ref={tooltipRef} showTooltip={showTooltip}>
            {tags.map((tag, index) => (
              <TagIcon key={index} tag={tag} />
            ))}
          </Tooltip>
        </>
      )}
    </TagIconWrapper>
  );
}

TagWrapper.propTypes = {
  tags: PropTypes.array.isRequired,
};

const TagIconWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-right: 4px;
`;

const InvertedText = styled.span`
  position: relative;
  bottom: -0.5rem;
  color: ${(props) => props.theme.main.fonts.secondary};
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.portfolio.background};
  outline: 1px solid ${(props) => props.theme.portfolio.border};
  padding: 10px;
  border-radius: 4px;
  z-index: 10;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 20rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  /* Default hidden state */
  opacity: ${(props) => (props.showTooltip ? 1 : 0)};
  transform: ${(props) =>
    props.showTooltip ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${(props) => (props.showTooltip ? "auto" : "none")};
`;