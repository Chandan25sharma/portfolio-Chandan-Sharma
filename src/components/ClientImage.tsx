'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ClientImage({ src, alt, ...props }: any) {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? '/images/chandanProfile.jpg' : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
