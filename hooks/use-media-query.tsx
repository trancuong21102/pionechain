/* eslint-disable no-unused-vars */
'use client'

import * as React from 'react'
import { useCallbackRef } from './use-callback-ref'

type MediaQueryCallback = (event: MediaQueryListEvent) => void

function listen(query: MediaQueryList, callback: MediaQueryCallback) {
  try {
    query.addEventListener('change', callback)
    return () => query.removeEventListener('change', callback)
  } catch {
    query.addListener(callback)
    return () => query.removeListener(callback)
  }
}

export type UseMediaQueryOptions = {
  fallback?: boolean
  ssr?: boolean
  getWindow?(): typeof window
}

export function useMediaQuery(query: string, options: UseMediaQueryOptions = {}): boolean {
  const { fallback = false, ssr = true, getWindow } = options
  const getWin = useCallbackRef(getWindow)

  // Khởi tạo giá trị ban đầu, chỉ truy cập window nếu không phải SSR
  const [value, setValue] = React.useState(() => ({
    media: query,
    matches: ssr ? !!fallback : typeof window !== 'undefined' && window.matchMedia?.(query)?.matches
  }))

  React.useEffect(() => {
    // Chỉ chạy trên client, nơi window được định nghĩa
    if (typeof window === 'undefined') return

    const win = getWin() ?? window
    const mediaQueryList = win.matchMedia(query)

    setValue((prev) => {
      const current = {
        media: query,
        matches: mediaQueryList.matches
      }
      return prev.matches === current.matches && prev.media === current.media ? prev : current
    })

    const handler = (evt: MediaQueryListEvent) => {
      setValue((prev) => {
        if (prev.media === evt.media) {
          return { ...prev, matches: evt.matches }
        }
        return prev
      })
    }

    const cleanup = listen(mediaQueryList, handler)
    return () => cleanup()
  }, [query, getWin])

  return value.matches
}
