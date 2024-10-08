import React from "react";
import styled from "styled-components";

export default function StyledHr() {
    return <StyledHR />
}

const StyledHR = styled.hr`
  height: 1px;
  margin: 50px 0;
  background: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(0, 0, 0, 0)), color-stop(0.5, #333333), to(rgba(0, 0, 0, 0)));
  background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
  background: -moz-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
  background: -o-linear-gradient(left, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #333333, rgba(0, 0, 0, 0));
  border: 0;

  &::after {
    display: block;
    content: '';
    height: 30px;
    background-image: -webkit-gradient(radial, 50% 0%, 0, 50% 0%, 116, color-stop(0%, #cccccc), color-stop(100%, rgba(255, 255, 255, 0)));
    background-image: -webkit-radial-gradient(center top, farthest-side, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
    background-image: -moz-radial-gradient(center top, farthest-side, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
    background-image: -o-radial-gradient(center top, farthest-side, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
    background-image: radial-gradient(farthest-side at center top, #cccccc 0%, rgba(255, 255, 255, 0) 100%);
  }
`;