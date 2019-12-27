import React from "react";

import ObjBox from "Components/Atoms/Box";

import image from "assets/not-found.png";

const ObjHeroesListNoData = () => {
  return (
    <ObjBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
      height="100%"
      minHeight="50vh"
      color="grey"
      textAlign="center"
    >
      <ObjBox as="img" width={250} src={image} mb={5} />
      <h3>Ops, não encontramos o que você buscou.</h3>
      Verifique a sua busca e tente novamente!
    </ObjBox>
  );
};

export default ObjHeroesListNoData;
