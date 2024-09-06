import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function MovingText({ texts }) {
    const [displayText, setDisplayText] = useState(texts[0]);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const alternateText = () => {
        if (isRemoving) {
            if (displayText.length > 0) {
                setDisplayText((prevState) => prevState.substring(0, prevState.length - 1));
            } else {
                setIsRemoving(false);
                setIsPaused(true);
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        } else {
            const nextText = texts[textIndex];
            if (displayText !== nextText) {
                setDisplayText((prevState) => nextText.substring(0, prevState.length + 1));
            } else {
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsRemoving(true);
                }, 1500); // Pause before starting to remove text
            }
        }
    };

    useEffect(() => {
        if (isPaused) return;

        const timeout = setTimeout(alternateText, isRemoving ? 100 : 120);
        return () => clearTimeout(timeout);
    }, [displayText, isRemoving, isPaused]);

    useEffect(() => {
        const pauseTimeout = setTimeout(() => setIsPaused(false), 1000); // Pause between text alternations
        return () => clearTimeout(pauseTimeout);
    }, [textIndex]);

    return <MovingTextStyle>{displayText}</MovingTextStyle>;
}

MovingText.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const MovingTextStyle = styled.span`
  color: ${(props) => props.theme.main.fonts.special};
`