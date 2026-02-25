"use client";

import Link from "next/link";
import { useState } from "react";

const DotHome = () => {
  const [rippleKey, setRippleKey] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setRippleKey((k) => k + 1);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <Link
      href="/"
      className="relative inline-flex items-center justify-center text-[#171717] transition-colors duration-150 hover:text-[#737373]"
      aria-label="Home"
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      {animating && (
        <span
          key={rippleKey}
          className="absolute rounded-full bg-current pointer-events-none"
          style={{ width: 8, height: 8, animation: "splash 0.6s ease-out forwards" }}
        />
      )}
    </Link>
  );
};

export default DotHome;
