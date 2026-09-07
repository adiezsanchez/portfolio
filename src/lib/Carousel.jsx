import { useEffect, useId, useState } from 'react'
import './Carousel.css'

function visibleCountForWidth(width) {
  if (width < 720) return 1
  if (width < 1100) return 2
  return 3
}

export default function Carousel({ items, renderItem, ariaLabel, className = '' }) {
  const trackId = useId()
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(() =>
    typeof window === 'undefined' ? 3 : visibleCountForWidth(window.innerWidth),
  )

  useEffect(() => {
    const onResize = () => setVisible(visibleCountForWidth(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(0, items.length - visible)
  const needsCarousel = items.length > visible

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const prev = () => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1))
  }

  const next = () => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1))
  }

  const windowItems = items.slice(index, index + Math.min(visible, items.length))

  return (
    <div
      className={`carousel ${needsCarousel ? 'is-carousel' : ''} ${className}`.trim()}
      style={{ '--visible': String(Math.min(visible, items.length)) }}
    >
      {needsCarousel ? (
        <button type="button" className="carousel-btn" onClick={prev} aria-controls={trackId} aria-label="Previous items">
          ‹
        </button>
      ) : null}

      <div id={trackId} className="carousel-window" role="list" aria-label={ariaLabel} aria-live="polite">
        {windowItems.map((item, itemIndex) => (
          <div key={`${index}-${itemIndex}`} className="carousel-slide" role="listitem">
            {renderItem(item, index + itemIndex)}
          </div>
        ))}
      </div>

      {needsCarousel ? (
        <button type="button" className="carousel-btn" onClick={next} aria-controls={trackId} aria-label="Next items">
          ›
        </button>
      ) : null}
    </div>
  )
}
