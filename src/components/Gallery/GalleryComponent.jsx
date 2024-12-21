import React, { useState } from 'react'
import { galleryImgs } from '../../utils/galleryImgs';
import MarqueeComponent from '../MarqueeComponent';

export default function GalleryComponent() {
  return (
    <div className="mx-auto pb-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#242424] py-10">
          Photo Gallery
        </h2>{" "}
        <MarqueeComponent pauseOnHover className="[--duration:10s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative h-[300px] w-[450px] cursor-pointer overflow-hidden rounded-[30px] p-2 flex flex-col justify-end"
              src={review.img}
            />
          ))}
        </MarqueeComponent>
        <MarqueeComponent reverse pauseOnHover className="[--duration:10s]">
          {galleryImgs.map((review, index) => (
            <img
              key={index}
              className="relative h-[300px] w-[450px] cursor-pointer overflow-hidden rounded-[30px] p-2 flex flex-col justify-end"
              src={review.img}
            />
          ))}
        </MarqueeComponent>
      </div>
    </div>
  );
}





