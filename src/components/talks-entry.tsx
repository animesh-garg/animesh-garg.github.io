"use client"

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Talks } from "@/data/talks";
import React, { useState } from "react";
// import VideoModal from "@/components/videoPlayer";
// import ModalVideo from "react-modal-video";

export function TalksEntry({ talks }: { talks: Talks }) {

  let imgSrc = (talks.imageUrl) ? talks.imageUrl :'assets/video-thumbnail-default.jpg'; // Default image
  let provider: string | undefined = undefined;

  // Check if the video URL is a YouTube link
  if (talks.videoUrl && talks.videoUrl.includes("youtube")) {
    // Extract YouTube video ID from the URL
    const match = talks.videoUrl.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/,
    );
    const vidID = match ? match[1] : "";
    provider = "youtube";
    imgSrc = vidID
      ? `https://img.youtube.com/vi/${vidID}/mqdefault.jpg`
      : "assets/video-thumbnail-default.jpg";
  }
  // Check if the video URL is a Vimeo link
  else if (talks.videoUrl && talks.videoUrl.includes("vimeo")) {
    // Extract Vimeo video ID from the URL
    const match = talks.videoUrl.match(/(?:vimeo\.com\/)(\d+)/);
    const vidID = match ? match[1] : "";
    provider = "vimeo";
    imgSrc = vidID
      ? `https://vumbnail.com/${vidID}.jpg`
      : "assets/video-thumbnail-default.jpg";
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleImageClick = () => {
    // Handle image click event
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {talks.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <a
              href={talks.videoUrl} target="_blank"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
          <Image
            src={imgSrc}
            alt={talks.title}
            width={160}
            height={200}
            className="rounded-lg"
            onClick={handleImageClick}
          />
          </a>
          {/* <ModalVideo
            isOpen={isOpen}
            close={() => setIsOpen(false)}
            videoID={talks.videoUrl}
            chanel={provider}
          /> */}
        </div>  
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-2">
          {talks.videoUrl ? (
            <a
              href={talks.videoUrl} target="_blank"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {talks.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
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
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
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
