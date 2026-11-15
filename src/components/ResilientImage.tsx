import React, { useEffect, useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  eager?: boolean;
  fit?: "cover" | "contain";
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  title,
  className = "",
  eager = false,
  fit = "cover",
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) {
        setLoaded(true);
      } else {
        setHasError(true);
      }
    } else {
      setLoaded(false);
    }
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0B1437] via-[#1E3A8A] to-[#4C1D95] text-white p-6 text-center w-full h-full ${className}`}
      >
        <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-[#FACC15]" aria-hidden="true" />
        </div>
        <p className="font-display font-semibold text-sm text-white/95 max-w-[220px]">
          {title || alt}
        </p>
      </div>
    );
  }

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A1128]">
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#0B1437] to-[#172554]"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full ${fitClass} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};
