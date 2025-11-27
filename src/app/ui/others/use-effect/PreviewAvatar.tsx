'use client';

import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

// - Open the image in another tab (1)
// - Choose another image
// - Refresh (1) to see if memory leak occurs

export default function PreviewAvatar() {
  const [avatar, setAvatar] = useState<string>();

  useEffect(() => {
    // If we don't clean up, it will exist in memory even if we change the avatar or leave the page
    return () => {
      avatar && URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);

    setAvatar(preview);
  };

  return (
    <div>
      <Input type="file" accept=".png, .jpg" onChange={handlePreviewAvatar} />
      {avatar && (
        <>
          <a
            href={avatar}
            target="_blank"
            className="inline-block underline text-blue-500 my-2"
          >
            View in another tab
          </a>
          <img src={avatar} />
        </>
      )}
    </div>
  );
}
