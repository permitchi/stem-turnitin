"use client";

import { useState } from "react";
import { sdgList, type SDG } from "../data/sdgData";
import SDGModal from "./SDGModal";

export default function SDGShowcase() {
  const [selectedSDG, setSelectedSDG] = useState<SDG | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSDGClick = (sdg: SDG) => {
    setSelectedSDG(sdg);
    setCurrentIndex(sdg.id - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sdgList.length);
    setSelectedSDG(sdgList[(currentIndex + 1) % sdgList.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sdgList.length) % sdgList.length);
    setSelectedSDG(sdgList[(currentIndex - 1 + sdgList.length) % sdgList.length]);
  };

  const handleClose = () => {
    setSelectedSDG(null);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-[#DDDAD0] dark:bg-[#3C3D37]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#3C3D37] dark:text-[#DDDAD0] mb-4">
            Sustainable Development Goals
          </h2>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sdgList.map((sdg) => (
            <div
              key={sdg.id}
              onClick={() => handleSDGClick(sdg)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-md h-[240px]">
                <img
                  src={sdg.imageUrl}
                  alt={`Goal ${sdg.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex flex-col items-center justify-end p-4">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSDG && (
        <SDGModal
          sdg={selectedSDG}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={currentIndex}
          totalSDGs={sdgList.length}
        />
      )}
    </section>
  );
}
