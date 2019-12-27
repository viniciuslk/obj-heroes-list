import styled from "styled-components";
import { theme, ifProp } from "styled-tools";

import ObjBox from "Components/Atoms/Box";

const BaseArrow = styled(ObjBox)`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  cursor: pointer;
  opacity: ${ifProp({ opaque: true }, 0.35, 1)};
`;

export const ObjArrowLeft = styled(BaseArrow)`
  border-right: 12px solid ${theme("colors.primary")};
`;

export const ObjArrowRight = styled(BaseArrow)`
  border-left: 12px solid ${theme("colors.primary")};
`;
