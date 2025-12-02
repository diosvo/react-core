'use client';

import { Suspense, useRef } from 'react';

import { Pause, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Video from './Video';

export default function Playground() {
  const videoRef = useRef(undefined);

  const handlePlay = () => {
    // console.log(videoRef.current.remove()); It will remove video w/o useImperativeHandle!
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <Button onClick={handlePlay} className="mr-2">
        <Play />
      </Button>
      <Button variant="destructive" onClick={handlePause}>
        <Pause />
      </Button>
      <Suspense fallback={<p>Loading video...</p>}>
        <Video ref={videoRef} />
      </Suspense>
    </>
  );
}
