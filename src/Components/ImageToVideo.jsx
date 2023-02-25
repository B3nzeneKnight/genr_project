


// import React, {useRef, useEffect} from 'react';
// import FramePlayer from 'image-sequence-player';
// import videoFile from './frames.json';

// const ImageToVideo = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     var options = {
//       rate: 1,
//       controls: true,
//       autoplay: true,
//       backwards: false,
//       startFrame: 0,
//       width: '640px',
//       height: '390px',
//       progressBarColor: '#f00',
//     };
//     const player = FramePlayer('my-player', options, videoFile);
//     player.play();
//   }, []);

//   return <div ref={containerRef} id="my-player" className="frameplayer"></div>;
// };

// export default ImageToVideo;