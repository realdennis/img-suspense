/**
 * Flow Description
 * 
 * onLoad
 * => call prop.onLoad (if callable)
 * => setLoaded 
 * => render img
 * 
 * onError
 * => setIsError
 * => Throw Exception
 * 
 */
import React, { useState } from 'react';
import Proptypes from 'prop-types';

/**
 * Allow user to pass onLoad handler
 * Allow user to override onError handler
 */
const ImgSuspense = ({ fallback, src, alt, style, onLoad, ...restProps }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  if (isError) throw new Error('img onerror');
  return (
    <React.Fragment>
      <img
        src={src}
        alt={alt}
        style={isLoaded ? style : { display: 'none' }}
        onLoad={() => {
          typeof onLoad === 'function' && onLoad();
          setLoaded(true);
        }}
        onError={() => setIsError(true)}
        {...restProps}
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
