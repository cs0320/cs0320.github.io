import React, { Fragment, useEffect, useRef } from 'react';
import '../App.css';




function SceneViewer() {
  const containerRef = useRef(null);
  const appRef = useRef(null);
  
  const canvas = useRef();

  // useEffect(() => {
  //   const app = new Application(document.getElementById('canvas') as HTMLCanvasElement);

  //   // this can map to renderer constructor args or be a custom options interface
  //   const options = { canvas: canvas.current };
  //   app.start('/scene.json', options);

  //   // Cleanup on unmount
  //   return () => {
  //     // Possibly a toggle for whether internals are disposed for re-usability?
  //     app.dispose();
  //   };
  // }, []);

  return (
    // <Fragment>
    //   <canvas ref={canvas} />
      
    // </Fragment>
    <div></div>
  );
};

export default SceneViewer;
