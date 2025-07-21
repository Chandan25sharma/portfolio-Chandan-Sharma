'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ClientImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
}

export default function ClientImage({ src, alt, ...props }: ClientImageProps) {
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
