import styled from "styled-components";

import {
  space,
  flexbox,
  color,
  position,
  background,
  compose,
  typography,
  display,
  layout,
  border
} from "styled-system";

const ObjBox = styled("div")`
  ${compose(
    space,
    flexbox,
    color,
    background,
    position,
    typography,
    display,
    layout,
    border
  )}
`;

export default ObjBox;
