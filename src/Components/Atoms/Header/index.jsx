import React from "react";
import { Row, Col, Hidden } from "react-grid-system";
import styled from "styled-components";
import { theme } from "styled-tools";

import ObjBox from "../Box";

const StdBar = styled(ObjBox)`
  height: 4px;
  width: 54px;
  background: ${theme("colors.primary")};
`;

const StdHeaderText = styled(Col)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ObjHeader = () => (
  <ObjBox
    pt={{ _: 3, lg: 5 }}
    mb={{ _: 3, lg: 7 }}
    color="primary"
    fontSize={{ _: 0, md: 2 }}
    px={8}
  >
    <Row justify="between">
      <StdHeaderText>
        <ObjBox as="span" mr="xs" fontWeight={2}>
          BUSCA KITSU
        </ObjBox>
        <ObjBox as="span" fontWeight={0}>
          TESTE FRONT-END
        </ObjBox>
      </StdHeaderText>
      <Col lg="content">
        <Hidden xs sm md lg>
          VINICIUS L. K.
        </Hidden>
      </Col>
    </Row>
    <StdBar />
  </ObjBox>
);

export default ObjHeader;
