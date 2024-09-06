import styled from "styled-components";
import PropTypes from "prop-types";
import TagIcon from "../posts/TagIcon";

// Images
import NoImage from "../../assets/no-image.jpg";
import LinkIcon from "../../assets/externalLink.svg";

export default function PostSummary({
  title,
  preview,
  previewImage,
  description,
  link,
  github,
  tags,
}) {
  return (
    <PostWrapper>
      <PreviewContainer>
        {preview ? (
          <PostPreview src={preview || NoImage} autoPlay loop muted controls />
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
          <PostHeader>{title}</PostHeader>
          {tags && (
            <TagIconWrapper>
              {tags.map((tag, index) => (
                <TagIcon key={index} tag={tag} />
              ))}
            </TagIconWrapper>
          )}
        </div>
        <PostBody>
          <PostDescription>{description}</PostDescription>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "fit-content" }}>
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
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  outline: 2px solid ${({ theme }) => theme.portfolio.border};
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
  font-size: 2.25rem;
  color: ${(props) => props.theme.main.fonts.primary};
  text-align: start;
  font-family: 'Poppins', sans-serif;
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
