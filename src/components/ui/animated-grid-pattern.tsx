'use client'

import { useId, useRef } from 'react'

import { cn } from '@/lib/utils'
import { useMediaQuery } from 'hooks/use-media-query'

/* eslint-disable no-unused-vars */
export enum MediaQueries {
  SmUp = '(min-width: 640px)',
  MdUp = '(min-width: 768px)',
  LgUp = '(min-width: 1024px)',
  XlUp = '(min-width: 1280px)',
  TwoXlUp = '(min-width: 1536px)',

  SmDown = '(max-width: 640px)',
  MdDown = '(max-width: 768px)',
  LgDown = '(max-width: 1024px)',
  XlDown = '(max-width: 1280px)',
  TwoXlDown = '(max-width: 1536px)'
}


interface AnimatedGridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  className?: string
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  className,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId()
  const containerRef = useRef(null)
  const isMobile = useMediaQuery(MediaQueries.SmDown, { ssr: true, fallback: true })

  const effectiveWidth = width
  const effectiveHeight = height

  if (isMobile) {
    return null
  }

  return (
    <svg
      ref={containerRef}
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full text-muted-foreground/10 dark:text-muted-foreground/15 fill-gray-100/20 stroke-gray-200/30 dark:stroke-gray-200/7',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={effectiveWidth}
          height={effectiveHeight}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${effectiveHeight}V.5H${effectiveWidth}`}
            fill='none'
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  )
}
