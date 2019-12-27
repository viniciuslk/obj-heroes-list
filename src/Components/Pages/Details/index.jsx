import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Container } from "react-grid-system";

import { axiosInstance } from "config/Axios";
import { useAppContext } from "Context";
import ObjBox from "Components/Atoms/Box";
import ObjSpinner from "Components/Atoms/Spinner";
import ObjDetailsNameAndAvatar from "./NameAndAvatar";
import ObjDetailsMedias from "./Medias";

import arrow from "assets/left-arrow.svg";

const StdContainer = styled(Container)`
  ${theme("mediaQueries.down.lg")} {
    padding: 0 ${theme("space.md")} !important;
  }
`;

const StdGoBack = styled(ObjBox)`
  cursor: pointer;
  margin: ${theme("space.xl")} 0 ${theme("space.xxl")};
  display: flex;
  align-items: center;
  font-weight: ${theme("fontWeights.medium")};
`;

const ObjPageDetails = () => {
  const { id: heroId } = useParams();
  const history = useHistory();
  const { hero: contextHero } = useAppContext();

  const [hero, setHero] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      setLoading(true);
      if (contextHero) {
        setHero(contextHero);
      } else {
        const hero = await axiosInstance.get(`/characters/${heroId}`);
        setHero(hero.data.data);
      }
      setLoading(false);
    };

    fetchHero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StdContainer>
      {loading ? (
        <ObjSpinner />
      ) : (
        <>
          <StdGoBack onClick={() => history.push("/")}>
            <ObjBox as="img" src={arrow} width={18} mr={2} />
            VOLTAR PARA O INÍCIO
          </StdGoBack>
          <ObjDetailsNameAndAvatar
            image={hero.attributes.image && hero.attributes.image.original}
            name={hero.attributes.name}
            slug={hero.attributes.slug}
          />
          <ObjBox
            mb={7}
            dangerouslySetInnerHTML={{ __html: hero.attributes.description }}
            textAlign="justify"
          />
          <ObjDetailsMedias
            link={hero.relationships.mediaCharacters.links.related}
          />
        </>
      )}
    </StdContainer>
  );
};

export default ObjPageDetails;
