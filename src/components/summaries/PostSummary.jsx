import styled from "styled-components";
import PropTypes from "prop-types";
import TagWrapper from "../posts/TagWrapper";
import { React, useRef } from "react";

// Images
import NoImage from "../../assets/no-image.jpg";
import LinkIcon from "../../assets/externalLink.svg";

export default function PostSummary({
  title,
  fontSize = 2.25,
  preview,
  previewImage,
  description,
  link,
  github,
  tags,
}) {
  const videoRef = useRef(null);

  // Function to play video on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.controls = true;
      setTimeout(() => {
        videoRef.current.play();
      }, 500);
    }
  };

  // Function to pause video when hover ends
  const handleMouseLeave = () => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current.pause();
        videoRef.current.controls = false;
      }, 500);
    }
  };

  return (
    <PostWrapper>
      <PreviewContainer>
        {preview ? (
          <PostPreview
            ref={videoRef}
            src={preview}
            loop
            muted
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <PostPreviewImage src={previewImage || NoImage} draggable="false" />
        )}
      </PreviewContainer>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <PostHeader fontSize={fontSize}>{title}</PostHeader>
          {tags && (
            <TagWrapper tags={tags} />
          )}
        </div>
        <PostBody>
          <PostDescription>{description}</PostDescription>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "fit-content",
            }}
          >
            {link && (
              <Link target="_blank" href={link} draggable="false">
                <AnimatedText>Visit Project</AnimatedText>
                <IconImg draggable="false" src={LinkIcon} alt="" />
              </Link>
            )}

            {github && (
              <Link target="_blank" href={github} draggable="false">
                <AnimatedText>View Code</AnimatedText>
                <IconImg draggable="false" src={LinkIcon} alt="" />
              </Link>
            )}
          </div>
        </PostBody>
      </div>
    </PostWrapper>
  );
}

PostSummary.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  previewImage: PropTypes.string,
  fontSize: PropTypes.string,
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  margin: 2rem;
  padding: 0;
  gap: 2rem;
`;

const TagIconWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.portfolio.border};
`;

const PostPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const PostPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PostHeader = styled.div`
  display: inline-block;
  font-weight: 300;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.theme.main.fonts.primary};
  margin-bottom: ${(props) => 2.25 - props.fontSize}rem;
  text-align: start;
  font-family: "Poppins", sans-serif;
`;

const PostBody = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: start;
`;

const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.main.fonts.secondary};
`;

const AnimatedText = styled.div`
  color: ${(props) => props.theme.main.fonts.secondary};
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

const IconImg = styled.img`
  width: 1.2rem;
  height: auto;
  draggable: false;
  filter: ${(props) => props.theme.footer.clipboard.filter};
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-flex;
  justify-content: start;
  align-items: end;
  gap: 2px;
`;
