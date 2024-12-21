import React from 'react';

function MarqueeComponent({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,

  ...props
}) {
  const baseWrapperClasses = [
    "group",
    "flex",
    "overflow-hidden",
    "p-2",
    "[--duration:40s]",
    "[--gap:1rem]",
    "gap-[var(--gap)]",
    vertical ? "flex-col" : "flex-row",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const getMarqueeItemClasses = () => {
    return [
      "flex",
      "shrink-0",
      "justify-around",
      "gap-[var(--gap)]",
      vertical
        ? reverse
          ? "animate-marquee-down flex-col"
          : "animate-marquee-up flex-col"
        : reverse
        ? "animate-marquee-reverse flex-row"
        : "animate-marquee flex-row",
      pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <div {...props} className={baseWrapperClasses}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={getMarqueeItemClasses()}>
            {children}
          </div>
        ))}
    </div>
  );
}

export default MarqueeComponent;