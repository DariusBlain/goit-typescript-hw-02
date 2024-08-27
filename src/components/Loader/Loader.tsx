import React from 'react'; 
import { RotatingTriangles } from "react-loader-spinner";

const Loader = (): React.ReactElement => {
  return (
    <RotatingTriangles
      visible={true}
      height="120"
      width="120"
      ariaLabel="rotating-triangles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;