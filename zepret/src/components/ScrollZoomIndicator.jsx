import { useEffect, useMemo, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';

const MIN_ZOOM = 10;
const MAX_ZOOM = 100;
const ZOOM_STEP = 10;
const TRACK_HEIGHT = 280;
const THUMB_SIZE = 18;
const SCROLL_DEBOUNCE_MS = 220;
const SPRING_CONFIG = { stiffness: 140, damping: 25 };

export const ScrollZoomIndicator = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);
  const zoomValue = useTransform(smoothProgress, [0, 1], [MIN_ZOOM, MAX_ZOOM]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(MIN_ZOOM);
  const [progressPercent, setProgressPercent] = useState(0);
  const [thumbBottom, setThumbBottom] = useState(0);
  const scrollTimeoutRef = useRef(null);

  useMotionValueEvent(scrollYProgress, 'change', () => {
    setIsScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), SCROLL_DEBOUNCE_MS);
  });
  useMotionValueEvent(zoomValue, 'change', (latest) => setCurrentZoom(Math.round(latest)));
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const clampedProgress = Math.max(0, Math.min(1, latest));
    setProgressPercent(Math.round(clampedProgress * 100));
    setThumbBottom(Math.round(clampedProgress * (TRACK_HEIGHT - THUMB_SIZE)));
  });

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const zoomMarks = useMemo(() => {
    const marks = [];
    for (let value = MAX_ZOOM; value >= MIN_ZOOM; value -= ZOOM_STEP) {
      marks.push(value);
    }
    return marks;
  }, []);

  return (
    <aside
      className="scroll-zoom-indicator"
      aria-label="Scroll zoom indicator"
      style={{ '--zoom-track-height': `${TRACK_HEIGHT}px`, '--zoom-thumb-size': `${THUMB_SIZE}px` }}
    >
      <div className="scroll-zoom-track-wrapper">
        <div className="scroll-zoom-track">
          <div className="scroll-zoom-progress" style={{ height: `${progressPercent}%` }} />
          <div
            className="scroll-zoom-thumb"
            style={{
              bottom: `${thumbBottom}px`,
              transform: isScrolling ? 'scale(1.2)' : 'scale(1)',
              opacity: isScrolling ? 1 : 0.85,
            }}
          />
        </div>
        <ul className="scroll-zoom-marks" aria-hidden="true">
          {zoomMarks.map((mark) => (
            <li key={mark} className="scroll-zoom-mark">
              <span className="scroll-zoom-mark-line" />
              <span className="scroll-zoom-mark-label">{mark}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="scroll-zoom-value" aria-hidden="true">{currentZoom}</div>
    </aside>
  );
};
