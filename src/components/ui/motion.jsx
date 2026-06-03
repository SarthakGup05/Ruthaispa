import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * FadeIn Component
 * Fades and translates children in a specified direction when scrolled into view.
 */
export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  className = '',
  ...props
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const adjustedViewport = { once, margin: "-80px" };

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={adjustedViewport}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.02, 0.43, 1.01],
      }}
      style={{ willChange: "transform, opacity", ...props.style }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer Component
 * Orchestrates child animations to play sequentially using staggered delays.
 */
export function StaggerContainer({
  children,
  staggerChildren = 0.15,
  delayChildren = 0,
  once = true,
  className = '',
  ...props
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem Component
 * Animates a child element under a StaggerContainer parent.
 */
export function StaggerItem({
  children,
  direction = 'up',
  distance = 30,
  duration = 0.7,
  className = '',
  ...props
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.21, 1.02, 0.43, 1.01],
      },
    },
  };

  return (
    <motion.div 
      variants={itemVariants} 
      style={{ willChange: "transform, opacity", ...props.style }}
      className={className} 
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScaleIn Component
 * Scales up from a smaller initial scale when scrolled into view.
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.8,
  initialScale = 0.9,
  once = true,
  className = '',
  ...props
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.02, 0.43, 1.01],
      }}
      style={{ willChange: "transform, opacity, scale", ...props.style }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverLift Component
 * Lifts an element slightly on hover, giving a premium tactile feedback.
 */
export function HoverLift({
  children,
  liftAmount = -8,
  duration = 0.4,
  className = '',
  ...props
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: liftAmount,
        transition: { duration, ease: [0.25, 1, 0.5, 1] },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedText Component
 * Animates text word-by-word with premium reveal transitions.
 */
export function AnimatedText({
  text,
  className = '',
  once = true,
  delay = 0,
  ...props
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <span className={className} {...props}>
        {text}
      </span>
    );
  }

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
      {...props}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{ marginRight: "0.25em", display: "inline-block", overflow: "hidden" }}
        >
          <motion.span variants={child} style={{ display: "inline-block" }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

