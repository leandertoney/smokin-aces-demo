"use client";

import { useState, useEffect } from "react";

const announcements = [
  "FREE SHIPPING OVER $75",
  "30-DAY RETURNS",
  "FAMILY-OWNED & OPERATED",
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-2 text-center">
      <p className="text-xs uppercase tracking-wide text-[var(--color-ink)] transition-opacity duration-300">
        {announcements[currentIndex]}
      </p>
    </div>
  );
}
