import React from "react";
import { SvgIcon, SvgIconProps } from "@material-ui/core";
import styled from "styled-components";

const Svg = styled.svg`
  & .cls-1 {
    fill: #0061ff;
  }
`;

export interface IDropboxIconProps extends SvgIconProps {}

const DropboxIcon = (props: IDropboxIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 235.45 200"
      >
        <title>DropboxGlyph</title>
        <polygon
          className="cls-1"
          points="58.86 0 0 37.5 58.86 75 117.73 37.5 58.86 0"
        />
        <polygon
          className="cls-1"
          points="176.59 0 117.73 37.5 176.59 75 235.45 37.5 176.59 0"
        />
        <polygon
          className="cls-1"
          points="0 112.5 58.86 150 117.73 112.5 58.86 75 0 112.5"
        />
        <polygon
          className="cls-1"
          points="176.59 75 117.73 112.5 176.59 150 235.45 112.5 176.59 75"
        />
        <polygon
          className="cls-1"
          points="58.86 162.5 117.73 200 176.59 162.5 117.73 125 58.86 162.5"
        />
      </svg>
    </SvgIcon>
  );
};

export default DropboxIcon;
