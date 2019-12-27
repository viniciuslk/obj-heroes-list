import React from "react";
import { array, bool } from "prop-types";
import { Row, Col, Hidden, Container } from "react-grid-system";
import { theme } from "styled-tools";
import styled from "styled-components";

import ObjHeroesListItem from "./Item";
import ObjHeroesListLoading from "./Loading";
import ObjHeroesListNoData from "./NoData";

const StdContainer = styled(Container)`
  flex: auto;
  ${theme("mediaQueries.up.lg")} {
    padding: 0 ${theme("space.xxl")} !important;
  }
`;

const Header = styled("div")`
  height: 37px;
  color: white;
  padding: 0 ${theme("space.md")};
  display: flex;
  align-items: center;
  background-color: ${theme("colors.primary")};

  ${theme("mediaQueries.down.md")} {
    margin: 0 -5px;
  }
`;

const ObjHeroesList = ({ source, loading }) => {
  return (!source || !source.length) && !loading ? (
    <ObjHeroesListNoData />
  ) : (
    <StdContainer fluid>
      <Row gutterWidth={10}>
        <Col xs={12} md={6} xl={3}>
          <Header>Personagem</Header>
        </Col>
        <Col xs={0} md={6} xl={9}>
          <Hidden xs sm>
            <Header>Descrição</Header>
          </Hidden>
        </Col>
      </Row>
      {loading ? (
        <ObjHeroesListLoading />
      ) : (
        source.map(item => <ObjHeroesListItem item={item} key={item.id} />)
      )}
    </StdContainer>
  );
};

ObjHeroesList.propTypes = {
  source: array,
  loading: bool
};

export default ObjHeroesList;
