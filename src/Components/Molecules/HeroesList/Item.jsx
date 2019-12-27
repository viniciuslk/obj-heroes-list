import React from "react";
import { object, func } from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Row, Col, Hidden } from "react-grid-system";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

import ObjAvatar from "Components/Atoms/Avatar";

const StdListItemItem = styled(Row)`
  padding-top: ${theme("space.lg")};
  padding-bottom: ${theme("space.lg")};
  cursor: pointer;
  color: ${theme("colors.grey")};
  border-bottom: 2px solid ${theme("colors.primary-1")};
  margin: 0 !important;

  &:hover {
    background: ${theme("colors.primary-1")};
  }
`;

const StdListItemItemCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ObjHeroesListItem = ({ item, onItemClick }) => {
  return (
    <StdListItemItem onClick={() => onItemClick(item)}>
      <StdListItemItemCol xs={12} md={6} xl={3}>
        <Row align="center">
          <Col xs="content">
            <ObjAvatar
              mr={6}
              src={item.attributes.image && item.attributes.image.original}
            />
          </Col>
          <Col>{item.attributes.name}</Col>
        </Row>
      </StdListItemItemCol>
      <StdListItemItemCol xs={0} md={6} xl={9}>
        <Hidden xs sm>
          {item.attributes.description && item.attributes.description.length ? (
            <HTMLEllipsis
              maxLine="3"
              unsafeHTML={item.attributes.description}
            />
          ) : (
            "Este personagem não possui descrição."
          )}
        </Hidden>
      </StdListItemItemCol>
    </StdListItemItem>
  );
};

ObjHeroesListItem.propTypes = {
  item: object,
  onItemClick: func
};

export default ObjHeroesListItem;
