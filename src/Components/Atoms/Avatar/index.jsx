import React from "react";
import { string } from "prop-types";

import noHeroImage from "assets/no-hero-image.png";

import ObjBox from "../Box";

const ObjAvatar = ({ src, ...props }) => {
  return (
    <ObjBox
      backgroundImage={`url(${src || noHeroImage})`}
      width={58}
      height={58}
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="100%"
      {...props}
    />
  );
};

ObjAvatar.propTypes = {
  src: string
};

export default ObjAvatar;
