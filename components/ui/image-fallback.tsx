"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageFallbackProps = ImageProps & {
  fallbackLabel: string;
  fallbackClassName?: string;
  wrapperClassName?: string;
};

export function ImageFallback({
  fallbackClassName = "",
  fallbackLabel,
  wrapperClassName = "",
  alt,
  className,
  ...props
}: ImageFallbackProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={wrapperClassName}>
      {hasError ? (
        <div
          className={`flex h-full w-full items-center justify-center rounded-[inherit] bg-gradient-to-br from-slate-100 via-white to-slate-200 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 ${fallbackClassName}`}
        >
          <span>{fallbackLabel}</span>
        </div>
      ) : (
        <Image
          {...props}
          alt={alt}
          className={className}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
