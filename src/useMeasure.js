import {useState, useRef, useLayoutEffect} from 'react';

export const useMeasure = {ref, deps} => {

    const [rect,setRect] = useState({});
    //const divRef = useRef();

  useLayoutEffect(() => {
      setRect(ref.current.getBoundingClientRect());
  }, deps);

  return rect;
};