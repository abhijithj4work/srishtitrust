import { useRef, useCallback } from 'react'
import { useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'

interface TiltResult {
  ref: React.RefObject<HTMLDivElement | null>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}

export function useTilt(intensity = 14): TiltResult {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30,
  })

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }, [x, y])

  const onMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
