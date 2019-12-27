import React from "react";
import { bool } from "prop-types";
import styled, { css } from "styled-components";
import { ClipLoader } from "react-spinners";
import { ifProp } from "styled-tools";

const StdLoading = styled("div")`
  width: 100%;
  height: ${ifProp({ relative: true }, "200px", "calc(100vh - 200px)")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StdClipLoader = css`
  border: 5px solid transparent;
  border-color: rgba(212, 32, 38, 1) rgba(212, 32, 38, 1) transparent;
`;

const ObjSpinner = ({ relative }) => {
  return (
    <StdLoading relative={relative}>
      <ClipLoader css={StdClipLoader} />
    </StdLoading>
  );
};

ObjSpinner.propTypes = {
  relative: bool
};

export default ObjSpinner;
