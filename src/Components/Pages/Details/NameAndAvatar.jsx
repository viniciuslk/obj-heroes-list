import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";
import { theme } from "styled-tools";

import ObjAvatar from "Components/Atoms/Avatar";
import ObjBox from "Components/Atoms/Box";

const StdContainer = styled(Container)`
  margin-bottom: ${theme("space.xxl")};
`;

const StdHeroName = styled(ObjBox)`
  color: ${theme("colors.primary")};
  font-size: ${theme("fontSizes.md")};
`;

const StdHeroSlug = styled(ObjBox)`
  color: white;
  background: ${theme("colors.grey-2")};
  font-size: ${theme("fontSizes.xxs")};
  border-radius: ${theme("radii.base")};
  padding: ${theme("space.xxs")};
  margin: ${theme("space.xxs")} 0;
  width: fit-content;
`;

const ObjDetailsNameAndAvatar = ({ image, name, slug }) => {
  return (
    <StdContainer>
      <Row align="center">
        <Col xs="content">
          <ObjAvatar src={image} />
        </Col>
        <Col>
          <StdHeroName>{name}</StdHeroName>
          <StdHeroSlug>{slug}</StdHeroSlug>
        </Col>
      </Row>
    </StdContainer>
  );
};

export default ObjDetailsNameAndAvatar;
