"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useLocale } from "next-intl";
import { fadeInAnimation } from "@/utils/animationVariants";
import BenefitsList from "./BenefitsList";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";
import { FOUNDER_VIDEO_URLS } from "@/constants/constants";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as any;

interface FounderContentProps {
  actualSolutionsText: string;
}

export default function FounderContent({
  actualSolutionsText,
}: FounderContentProps) {
  const locale = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const playerRef = useRef<any>(null);
  const vimeoPlayerRef = useRef<any>(null);
  const hasRestartedRef = useRef<boolean>(false);

  const videoUrl = FOUNDER_VIDEO_URLS[locale] || (locale === "ru" ? FOUNDER_VIDEO_URLS["uk"] : "");

  // Reset playing state when locale/video changes
  useEffect(() => {
    setIsPlaying(false);
    setAspectRatio(null);
    hasRestartedRef.current = false;
  }, [videoUrl]);

  const handleReady = (player: any) => {
    if (player) {
      const internalPlayer = player.getInternalPlayer();
      vimeoPlayerRef.current = internalPlayer;
      if (internalPlayer && internalPlayer.videoWidth && internalPlayer.videoHeight) {
        const ratio = (internalPlayer.videoHeight / internalPlayer.videoWidth) * 100;
        setAspectRatio(ratio);
      }
    }
  };

  const handleProgress = (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => {
    if (state.played >= 0.99 && !hasRestartedRef.current) {
      hasRestartedRef.current = true;
      
      setIsPlaying(false);
      
      if (vimeoPlayerRef.current && typeof vimeoPlayerRef.current.setCurrentTime === 'function') {
        vimeoPlayerRef.current.setCurrentTime(0);
      } else if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(0);
      }
      setTimeout(() => {
        hasRestartedRef.current = false;
      }, 500);
    }
  };

  const handleEnded = () => {
    if (!hasRestartedRef.current) {
      hasRestartedRef.current = true;
      if (vimeoPlayerRef.current && typeof vimeoPlayerRef.current.setCurrentTime === 'function') {
        vimeoPlayerRef.current.setCurrentTime(0);
      }
      setTimeout(() => {
        setIsPlaying(false);
        hasRestartedRef.current = false;
      }, 300);
    }
  };

  return (
    <>
      {/* Основний контент - рухається зі звичайною швидкістю (без параллаксу) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ x: -20 })}
        className="relative rounded-[8px] overflow-hidden w-full md:w-[calc(100%-19px-334px)] flex items-center justify-center"
      >
        {videoUrl ? (
          <div
            className="relative rounded-[8px] w-full group"
            aria-label="Founder video"
          >
            <div className="relative w-full rounded-[8px] overflow-hidden">
              <div 
                className="rounded-[8px] overflow-hidden"
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: 0, 
                  paddingBottom: aspectRatio ? `${aspectRatio}%` : '56.25%' 
                }}
              >
                <div className="absolute inset-0 rounded-[8px] overflow-hidden [&>div]:rounded-[8px] [&>div>iframe]:rounded-[8px] [&>div>video]:rounded-[8px]">
                  <ReactPlayer
                    ref={playerRef}
                    key={`founder-player-${videoUrl}-${locale}`}
                    src={videoUrl}
                    playing={isPlaying}
                    controls={false}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    onReady={handleReady}
                    onProgress={handleProgress}
                    onEnded={handleEnded}
                    config={{
                      vimeo: {
                        playerOptions: {
                          title: false,
                          byline: false,
                          portrait: false,
                          autopause: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center xl:opacity-0 xl:hover:opacity-100 xl:hover:brightness-125 transition duration-300 ease-in-out cursor-pointer z-10 rounded-[8px]"
                >
                  <PlayIcon />
                </button>
              )}
              {isPlaying && (
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 xl:group-hover:brightness-125 duration-300 ease-in-out transition cursor-pointer z-10 rounded-[8px]"
                >
                  <PauseIcon />
                </button>
              )}
            </div>
          </div>
        ) : (
          <Image
            src="/images/homePage/founder/founder.webp"
            alt="founder"
            fill
            className="object-cover"
          />
        )}
      </motion.div>

      <div className="md:w-[333px]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95 })}
          className="mb-8 font-actay text-[22px] font-bold leading-[108%] uppercase"
        >
          {actualSolutionsText}
        </motion.h2>
        <BenefitsList />
      </div>
    </>
  );
}
