import React, { useState } from 'react'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback({ fallbackSrc, src, alt, style, className, ...rest }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [didFinalError, setDidFinalError] = useState(false)

  const handleError = () => {
    if (currentSrc !== fallbackSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    } else {
      setDidFinalError(true)
    }
  }

  if (didFinalError) {
    return (
      <div className={`inline-flex items-center justify-center bg-slate-100 dark:bg-slate-800 ${className ?? ''}`} style={style}>
        <svg width="40" height="40" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinejoin="round" opacity=".3" fill="none" strokeWidth="3.7">
          <rect x="16" y="16" width="56" height="56" rx="6"/>
          <path d="m16 58 16-18 32 32"/>
          <circle cx="53" cy="35" r="7"/>
        </svg>
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...rest}
    />
  )
}
