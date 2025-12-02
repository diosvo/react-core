'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props, ref) {
  // Use it rather than "ref" - Private
  const videoRef = useRef();

  // ❓ Why "useImperativeHandle"
  // Customize the handle exposed (expect: play & pause only)
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return (
    <video ref={videoRef} className="mt-2">
      <source src="/video/tiktok.mp4" type="video/mp4" />
    </video>
  );
}

// forwardRef (under v19) | Pass "ref" as a prop instead
export default forwardRef(Video);
