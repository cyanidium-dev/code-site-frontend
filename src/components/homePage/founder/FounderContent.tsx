"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useLocale, useTranslations } from "next-intl";
import { fadeInAnimation } from "@/utils/animationVariants";
import BenefitsList from "./BenefitsList";
import PlayIcon from "@/components/shared/icons/PlayIcon";
import PauseIcon from "@/components/shared/icons/PauseIcon";
import RestartIcon from "@/components/shared/icons/RestartIcon";
import Spinner from "@/components/shared/icons/Spinner";
import { FOUNDER_VIDEO_URLS } from "@/constants/constants";
import ClientApplication from "@/components/shared/clientApplication/ClientApplication";

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
  const t = useTranslations("homePage.founder");
  const [isPlaying, setIsPlaying] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [playerKey, setPlayerKey] = useState(0);
  const [showEnded, setShowEnded] = useState(false);
  const [isRemounting, setIsRemounting] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const videoUrl = FOUNDER_VIDEO_URLS[locale] || (locale === "ru" ? FOUNDER_VIDEO_URLS["uk"] : "");

  // Reset playing state when locale/video changes
  useEffect(() => {
    setIsPlaying(false);
    setAspectRatio(null);
    setVideoDuration(null);
    setPlayerKey(prev => prev + 1);
    setShowEnded(false);
    setIsRemounting(false);
  }, [videoUrl]);

  // Setup Vimeo postMessage communication
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes('vimeo.com')) return;

      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      
      if (data.event === 'ready') {
        postMessageToVimeo({ method: 'getDuration' });
        postMessageToVimeo({ method: 'addEventListener', value: 'timeupdate' });
      } else if (data.event === 'timeupdate') {
        const currentTime = data.data.seconds;
        
        // Pause and show restart button 0.3 seconds before end
        if (videoDuration && currentTime >= videoDuration - 0.3 && !showEnded) {
          postMessageToVimeo({ method: 'pause' });
          setIsPlaying(false);
          setShowEnded(true);
        }
      } else if (data.method === 'getDuration') {
        setVideoDuration(data.value);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [videoDuration, showEnded]);

  const postMessageToVimeo = (data: any) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify(data), '*');
    }
  };

  const handleReady = (player: any) => {
    if (player) {
      const internalPlayer = player.getInternalPlayer();
      
      if (internalPlayer && internalPlayer.videoWidth && internalPlayer.videoHeight) {
        const ratio = (internalPlayer.videoHeight / internalPlayer.videoWidth) * 100;
        setAspectRatio(ratio);
      }

      setTimeout(() => {
        const iframe = document.querySelector('iframe[src*="vimeo.com"]') as HTMLIFrameElement;
        if (iframe) {
          iframeRef.current = iframe;
        }
      }, 500);
      
      // Reset remounting state when player is ready
      setIsRemounting(false);
    }
  };

  const handleEnded = () => {
    postMessageToVimeo({ method: 'pause' });
    setIsPlaying(false);
    setShowEnded(true);
  };

  const handleRestart = () => {
    setIsRemounting(true);
    setShowEnded(false);
    setIsPlaying(false);
    
    // Small delay to show loading state, then remount
    setTimeout(() => {
      setPlayerKey(prev => prev + 1);
      setAspectRatio(null);
      setVideoDuration(null);
      
      // Safety timeout: reset remounting state after 5 seconds if onReady doesn't fire
      setTimeout(() => {
        setIsRemounting(false);
      }, 5000);
    }, 200);
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
                    key={`founder-player-${videoUrl}-${locale}-${playerKey}`}
                    src={videoUrl}
                    playing={isPlaying}
                    controls={false}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    onReady={handleReady}
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
                {isRemounting && (
                  <div className="absolute inset-0 rounded-[8px] bg-black flex items-center justify-center z-20">
                    <Spinner size={48} />
                  </div>
                )}
              </div>
              {showEnded && !isRemounting && (
                <button
                  onClick={handleRestart}
                  className="absolute inset-0 flex items-center justify-center opacity-100 hover:brightness-125 transition duration-300 ease-in-out cursor-pointer z-10 rounded-[8px]"
                  aria-label="Restart video"
                >
                  <RestartIcon />
                </button>
              )}
              {!showEnded && !isPlaying && !isRemounting && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center xl:opacity-0 xl:hover:opacity-100 xl:hover:brightness-125 transition duration-300 ease-in-out cursor-pointer z-10 rounded-[8px]"
                  aria-label="Play video"
                >
                  <PlayIcon />
                </button>
              )}
              {!showEnded && isPlaying && !isRemounting && (
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 xl:group-hover:brightness-125 duration-300 ease-in-out transition cursor-pointer z-10 rounded-[8px]"
                  aria-label="Pause video"
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
        <ClientApplication
            buttonText={t("getOffer")}
            variant="gradient"
            className="w-full mt-4 lg:mt-3"
            buttonClassName="w-full h-[56px]"
          />
      </div>
    </>
  );
}
