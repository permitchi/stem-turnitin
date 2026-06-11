"use client";

import { useEffect } from "react";
import { type SDG } from "../data/sdgData";

interface SDGModalProps {
  sdg: SDG;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalSDGs: number;
}

export default function SDGModal({
  sdg,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalSDGs,
}: SDGModalProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  return (
    <>
      {/* Dark Background Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        {/* Left Arrow */}
        <button
          onClick={onPrev}
          className="absolute left-4 text-white hover:bg-white/20 rounded-full p-3 transition-all duration-200 z-50"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          className={`${sdg.color} rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto relative text-white`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Body */}
          <div className="p-8">
            {/* Image and Title */}
            <div className="mb-6">
              <div className="mb-6 rounded-lg overflow-hidden w-96 h-96">
                <img
                  src={sdg.imageUrl}
                  alt={`Goal ${sdg.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white/80">Goal {sdg.id} of 17</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg leading-relaxed">{sdg.description}</p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold">Progress</span>
                <span className="text-sm opacity-75">
                  {currentIndex + 1}/{totalSDGs}
                </span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalSDGs) * 100}%` }}
                />
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: Math.min(totalSDGs, 10) }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    i === currentIndex % 10
                      ? "bg-white"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Keyboard Instructions */}
            <p className="text-center text-white/60 text-sm">
              Use arrow keys to navigate • Press Escape to close
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:bg-white/20 rounded-full p-3 transition-all duration-200 z-50"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
