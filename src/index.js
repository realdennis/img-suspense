import React, { useState } from 'react';
import Proptypes from 'prop-types';
const ImgSuspense = ({ fallback, src, alt, style, ...restProps }) => {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <React.Fragment>
      <img
        src={src}
        alt={alt}
        {...restProps}
        style={isLoaded ? style : Object.assign({}, style, { display: 'none' })}
        onLoad={() => setLoaded(true)}
      />
      {!isLoaded && fallback}
    </React.Fragment>
  );
};
ImgSuspense.propTypes = {
  src: Proptypes.string.isRequired,
  fallback: Proptypes.element.isRequired
};
export default ImgSuspense;
