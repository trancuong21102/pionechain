'use client'

import { useEffect, useRef } from 'react'

interface BlogContentProps {
  htmlContent?: string
}

export default function BlogContent({ htmlContent }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3')

      headings.forEach((heading) => {
        if (!heading.id) {
          heading.id =
            heading.textContent
              ?.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '') || ''
        }
      })

      window.dispatchEvent(new CustomEvent('blog-content-ready'))
    }
  }, [htmlContent])

  return (
    <article
      ref={contentRef}
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: htmlContent || '' }}
    />
  )
}
