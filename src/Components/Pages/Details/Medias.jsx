import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import { theme } from "styled-tools";
import { Container, Row, Col } from "react-grid-system";

import { axiosInstance } from "config/Axios";
import ObjBox from "Components/Atoms/Box";
import ObjSpinner from "Components/Atoms/Spinner";
import ObjAvatar from "Components/Atoms/Avatar";

const StdTitle = styled(ObjBox)`
  color: ${theme("colors.primary")};
  font-size: ${theme("fontSizes.md")};
  margin-bottom: ${theme("space.md")};
`;

const StdItem = styled(ObjBox)`
  padding-top: ${theme("space.lg")};
  padding-bottom: ${theme("space.lg")};
  color: ${theme("colors.grey")};
  border-bottom: 2px solid ${theme("colors.primary-1")};
  margin: 0 -${theme("space.md")} !important;
  padding: ${theme("space.md")};
  cursor: pointer;

  &:hover {
    background: ${theme("colors.primary-1")};
  }
`;

const StdItemTitle = styled(ObjBox)`
  margin-bottom: ${theme("space.xs")};
  font-size: ${theme("fontSizes.sm")};
  color: ${theme("colors.primary")};
`;

const StdSeeMoreOrLess = styled(ObjBox)`
  color: ${theme("colors.grey-1")};
  margin: ${theme("space.xs")} 0;
  cursor: pointer;
`;

const Item = ({ image, title, synopsis }) => {
  const [ellipsed, setEllipsis] = useState(true);
  return (
    <StdItem onClick={() => setEllipsis(old => !old)}>
      <Row gutterWidth={20}>
        <Col xs="content">
          <ObjAvatar src={image} />
        </Col>
        <Col>
          <StdItemTitle>{title}</StdItemTitle>
          {ellipsed ? (
            <LinesEllipsis
              text={synopsis}
              maxLine={!ellipsed && 3}
              ellipsis={<StdSeeMoreOrLess>Ver mais...</StdSeeMoreOrLess>}
            />
          ) : (
            <ObjBox textAlign="justify">
              {synopsis}
              <StdSeeMoreOrLess>Ver menos...</StdSeeMoreOrLess>
            </ObjBox>
          )}
        </Col>
      </Row>
    </StdItem>
  );
};

const ObjDetailsMedias = ({ link }) => {
  const [medias, setMedias] = useState();
  const [loading, setLoading] = useState();

  const fetchMedias = async medias => {
    const allMedias = medias.map(async item => {
      const media = await axiosInstance.get(
        item.relationships.media.links.related
      );
      return media.data.data;
    });

    setMedias((await Promise.all(allMedias)).flat());
  };

  useEffect(() => {
    const fetchRelatedMedias = async () => {
      setLoading(true);
      const relatedMedias = await axiosInstance.get(link);
      await fetchMedias(relatedMedias.data.data);
      setLoading(false);
    };

    if (link) fetchRelatedMedias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <ObjSpinner relative />
  ) : (
    <>
      <StdTitle>
        Mídias participadas:
        <ObjBox backgroundColor="primary" height={2} width={27} />
      </StdTitle>
      <Container>
        {medias ? (
          medias.map(({ id, attributes }) => (
            <Item
              key={id}
              image={attributes.posterImage.original}
              title={attributes.canonicalTitle}
              synopsis={attributes.synopsis}
            />
          ))
        ) : (
          <div />
        )}
      </Container>
    </>
  );
};

export default ObjDetailsMedias;
