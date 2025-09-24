export const fadeInAnimation = ({
  x = 0,
  y = 0,
  scale = 1,
  delay = 0,
  duration = 0.7,
  opacity = 0.01,
}) => ({
  hidden: {
    opacity: opacity,
    transform: `translate3d(${x}px, ${y}px, 0) scale3d(${scale}, ${scale}, 1)`,
    willChange: "opacity, transform",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)",
    transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.42, 0, 1, 1] as const },
  },
});

export const burgerMenuVariants = {
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 1, 1] as const },
  },
};
