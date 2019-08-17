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
import * as React from 'react';
const { useState } = React;
// import Proptypes from 'prop-types';

interface ImageSuspenseProps {
  fallback: React.ElementType;
  src: string;
  alt: string;
  style?: object;
  onLoad: (e?: Event) => void;
  onError: (e?: Event) => void;
}
/**
 * Allow user to pass onLoad handler
 * Allow user to override onError handler
 */
const ImgSuspense = ({
  fallback,
  src,
  alt,
  style,
  onLoad,
  onError,
  ...restProps
}: ImageSuspenseProps) => {
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
          // If onLoad exists, call it.

          setLoaded(true);
        }}
        onError={
          () => (typeof onError === 'function' ? onError() : setIsError(true))
          // If onError exists, call it and should not throw exception.
        }
        {...restProps}
      />
      {!isLoaded && fallback}
    </React.Fragment>
  );
};

export default ImgSuspense;
