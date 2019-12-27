import React from "react";
import { string, func } from "prop-types";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { theme } from "styled-tools";
import { compose, space } from "styled-system";

import ObjBox from "../Box";

const StdContainer = styled(ObjBox)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const StdLabel = styled("label")`
  color: ${theme("colors.primary")};
`;

const StdDebounceInput = styled(DebounceInput)`
  ${compose(space)};

  border: 1px solid ${theme("colors.grey-1")};
  border-radius: ${theme("radii.sm")};
  height: 27px;
  width: 100%;
  margin: 0;
  padding: 0 ${theme("space.xs")};
  outline: none;
`;

const ObjDebounceInput = ({ onChange, name, label, ...props }) => {
  return (
    <StdContainer {...props}>
      <StdLabel htmlFor={name}>{label}</StdLabel>
      <StdDebounceInput
        id={name}
        debounceTimeout={300}
        onChange={onChange}
        forceNotifyByEnter
        forceNotifyOnBlur
      />
    </StdContainer>
  );
};

ObjDebounceInput.defaultProps = {
  name: "nameOfInput"
};

ObjDebounceInput.propTypes = {
  onChange: func,
  name: string,
  label: string
};

export default ObjDebounceInput;
