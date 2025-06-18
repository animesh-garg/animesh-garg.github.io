"use client"

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Talks } from "@/data/talks";
import React from "react";
// import React, { useState } from "react";
// import VenoBox from "venobox";  

export function TalksEntry({ talks }: { talks: Talks }) {
  
  let imgSrc = "";
   // Default image
  if (talks.imageUrl) {
    imgSrc = talks.imageUrl; 
  }
  // Check if the video URL is a YouTube link
  else if (talks.videoUrl && talks.videoUrl.includes("youtube")) {
    // Extract YouTube video ID from the URL
    const match = talks.videoUrl.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/,
    );
    const vidID = match ? match[1] : "";
    // provider = "youtube";
    imgSrc = vidID
      ? `https://img.youtube.com/vi/${vidID}/mqdefault.jpg`
      : "assets/video-thumbnail-default.jpg";
  }
  // Check if the video URL is a Vimeo link
  else if (talks.videoUrl && talks.videoUrl.includes("vimeo")) {
    // Extract Vimeo video ID from the URL
    const match = talks.videoUrl.match(/(?:vimeo\.com\/)(\d+)/);
    const vidID = match ? match[1] : "";
    // provider = "vimeo";
    imgSrc = vidID
      ? `https://vumbnail.com/${vidID}.jpg`
      : "assets/video-thumbnail-default.jpg";
  }

  // assign image link to the video link, otherwise assign slides link
  const imglink = talks.videoUrl ? talks.videoUrl : (talks.slidesUrl ? talks.slidesUrl : "");

  //handle toggling of FsLightbox
  // const [toggler, setToggler] = useState(false); // For ilghtbox toggling
  // const lightboxSrc = talks.videoUrl ? talks.videoUrl : talks.imageUrl; 
  
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {(
        <div className="w-1/4 min-w-[160px] relative">
          <a
              href={imglink} target="_blank"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
          <Image
            src={imgSrc}
            alt={talks.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
          </a>
        </div>  
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-base mb-2">
          {talks.videoUrl ? (
            <a
              href={talks.videoUrl} target="_blank"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {talks.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-zinc-500"
              />
            </a>
          ) : (
            talks.title
          )}
        </h3>
        {talks.date && (
          <p className="text-sm text-zinc-600 mb-2">
            {talks.date}
          </p>
        )}
        <div className="flex gap-6">
          {talks.slidesUrl && (
            <a
              href={talks.slidesUrl} target="_blank"
              className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-zinc-500"
              />
              <span className="tracking-wider uppercase">Slides</span>
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 mb-2 mt-1 italic">
          {talks.description}
        </p>
      </div>
    </div>
  );
}
