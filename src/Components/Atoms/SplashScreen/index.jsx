import React from "react";

import ObjBox from "../Box";
import ObjSpinner from "../Spinner";

const ObjSplashScreen = () => {
  return (
    <ObjBox
      position="fixed"
      bottom={0}
      top={0}
      left={0}
      right={0}
      display="flex"
      alignItem="center"
      justifyContent="center"
    >
      <ObjSpinner />
    </ObjBox>
  );
};

export default ObjSplashScreen;
