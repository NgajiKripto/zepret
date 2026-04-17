import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';

const MIN_ZOOM = 10;
const MAX_ZOOM = 100;
const ZOOM_STEP = 10;
const TRACK_HEIGHT = 280;
const THUMB_SIZE = 18;

export const ScrollZoomIndicator = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 25 });
  const thumbY = useTransform(smoothProgress, [0, 1], [TRACK_HEIGHT - THUMB_SIZE, 0]);
  const zoomValue = useTransform(smoothProgress, [0, 1], [MIN_ZOOM, MAX_ZOOM]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(MIN_ZOOM);

  useMotionValueEvent(scrollYProgress, 'change', () => setIsScrolling(true));
  useMotionValueEvent(zoomValue, 'change', (latest) => setCurrentZoom(Math.round(latest)));

  useEffect(() => {
    if (!isScrolling) return undefined;
    const timeoutId = setTimeout(() => setIsScrolling(false), 220);
    return () => clearTimeout(timeoutId);
  }, [isScrolling]);

  const zoomMarks = useMemo(() => {
    const marks = [];
    for (let value = MAX_ZOOM; value >= MIN_ZOOM; value -= ZOOM_STEP) {
      marks.push(value);
    }
    return marks;
  }, []);

  return (
    <aside className="scroll-zoom-indicator" aria-label="Scroll zoom indicator">
      <div className="scroll-zoom-track-wrapper">
        <div className="scroll-zoom-track">
          <motion.div className="scroll-zoom-progress" style={{ scaleY: smoothProgress }} />
          <motion.div
            className="scroll-zoom-thumb"
            style={{ y: thumbY }}
            animate={isScrolling ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.85 }}
            transition={{ duration: 0.2 }}
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
      <motion.div className="scroll-zoom-value" aria-hidden="true">{currentZoom}</motion.div>
    </aside>
  );
};
