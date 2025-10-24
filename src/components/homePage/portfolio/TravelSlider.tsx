"use client";
import { useState, useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

// Types
interface TravelData {
  place: string;
  title: string;
  title2: string;
  description: string;
  image: string;
}

// Data
const data: TravelData[] = [
  {
    place: "Switzerland Alps",
    title: "SAINT",
    title2: "ANTONIEN",
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
    image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
  },
  {
    place: "Japan Alps",
    title: "NANGANO",
    title2: "PREFECTURE",
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
    image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
  },
  {
    place: "Sahara Desert - Morocco",
    title: "MARRAKECH",
    title2: "MEROUGA",
    description:
      "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
    image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
  },
  {
    place: "Sierra Nevada - USA",
    title: "YOSEMITE",
    title2: "NATIONAL PARAK",
    description:
      "Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.",
    image: "https://assets.codepen.io/3685267/timed-cards-4.jpg",
  },
  {
    place: "Tarifa - Spain",
    title: "LOS LANCES",
    title2: "BEACH",
    description:
      "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
    image: "https://assets.codepen.io/3685267/timed-cards-5.jpg",
  },
  {
    place: "Cappadocia - Turkey",
    title: "Göreme",
    title2: "Valley",
    description:
      "Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.",
    image: "https://assets.codepen.io/3685267/timed-cards-6.jpg",
  },
];

export default function TravelSlider() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
  const [detailsEven, setDetailsEven] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const loopIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animation constants
  const cardWidth = 200;
  const cardHeight = 300;
  const gap = 40;
  const numberSize = 50;
  const ease = [0.25, 0.1, 0.25, 1]; // sine.inOut equivalent

  // Calculate positions
  const getPositions = () => {
    if (typeof window === "undefined")
      return { offsetTop: 200, offsetLeft: 700 };
    const { innerHeight: height, innerWidth: width } = window;
    return {
      offsetTop: height - 430,
      offsetLeft: width - 830,
    };
  };

  const { offsetTop, offsetLeft } = getPositions();

  // Initialize component
  useEffect(() => {
    const init = () => {
      setIsInitialized(true);
      setTimeout(() => {
        startLoop();
      }, 1000);
    };

    init();
  }, []);

  // Start automatic loop
  const startLoop = () => {
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
    }

    loopIntervalRef.current = setInterval(() => {
      step();
    }, 3000);
  };

  // Stop loop
  const stopLoop = () => {
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
  };

  // Step to next slide
  const step = () => {
    setOrder((prev) => {
      const newOrder = [...prev];
      newOrder.push(newOrder.shift()!);
      return newOrder;
    });
    setDetailsEven((prev) => !prev);
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  // Manual navigation
  const goToSlide = (index: number) => {
    const currentIndex = order[0];
    const steps = (index - currentIndex + data.length) % data.length;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        step();
      }, i * 100);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      stopLoop();
    };
  }, []);

  if (!isInitialized) {
    return (
      <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
        <div className="text-black text-xl">Loading...</div>
      </div>
    );
  }

  const [active, ...rest] = order;
  const activeData = data[active];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#1a1a1a] text-white overflow-hidden font-['Inter']"
    >
      {/* Cover animation */}
      <motion.div
        className="absolute inset-0 bg-white z-[100]"
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.5,
        }}
      />

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] bg-[#ecad29] z-[60]"
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.6,
        }}
        onAnimationComplete={() => {
          // Reset indicator position
          setTimeout(() => {
            // This will be handled by the loop
          }, 300);
        }}
      />

      {/* Main card */}
      <motion.div
        key={`card-${active}`}
        className="absolute bg-cover bg-center shadow-[6px_6px_10px_2px_rgba(0,0,0,0.6)]"
        style={{ backgroundImage: `url(${activeData.image})` }}
        initial={{
          x: offsetLeft,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          borderRadius: 10,
        }}
        animate={{
          x: 0,
          y: 0,
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.1,
        }}
      />

      {/* Card content overlay */}
      <motion.div
        key={`content-${active}`}
        className="absolute left-0 top-0 text-white pl-4"
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.5,
        }}
      >
        <div className="w-[30px] h-[5px] bg-white rounded-full mb-1.5" />
        <div className="text-[13px] font-medium mb-1">{activeData.place}</div>
        <div className="text-[20px] font-semibold font-['Oswald']">
          {activeData.title}
        </div>
        <div className="text-[20px] font-semibold font-['Oswald']">
          {activeData.title2}
        </div>
      </motion.div>

      {/* Details panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`details-${detailsEven ? "even" : "odd"}`}
          className="absolute top-[240px] left-[60px] z-[22]"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: 0.4,
          }}
        >
          <motion.div
            className="h-[46px] overflow-hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.1,
            }}
          >
            <div className="pt-4 text-[20px] relative">
              <div className="absolute top-0 left-0 w-[30px] h-1 bg-white rounded-full" />
              {activeData.place}
            </div>
          </motion.div>

          <motion.div
            className="mt-0.5 h-[100px] overflow-hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.15,
            }}
          >
            <div className="text-[72px] font-semibold font-['Oswald']">
              {activeData.title}
            </div>
          </motion.div>

          <motion.div
            className="mt-0.5 h-[100px] overflow-hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.15,
            }}
          >
            <div className="text-[72px] font-semibold font-['Oswald']">
              {activeData.title2}
            </div>
          </motion.div>

          <motion.div
            className="mt-4 w-[500px]"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.3,
            }}
          >
            {activeData.description}
          </motion.div>

          <motion.div
            className="w-[500px] mt-6 flex items-center"
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: 0.35,
            }}
          >
            <button className="border-none bg-[#ecad29] w-9 h-9 rounded-full text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="border border-white bg-transparent h-9 rounded-full text-white px-6 text-xs ml-4 uppercase">
              Discover Location
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Side cards */}
      {rest.map((cardIndex, index) => {
        const cardData = data[cardIndex];
        const x = offsetLeft + index * (cardWidth + gap);
        const y = offsetTop;

        return (
          <motion.button
            key={`side-card-${cardIndex}`}
            onClick={() => goToSlide(cardIndex)}
            className="absolute bg-cover bg-center shadow-[6px_6px_10px_2px_rgba(0,0,0,0.6)] rounded-[10px] z-[30] cursor-pointer xl:hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${cardData.image})` }}
            initial={{
              x: x + 400,
              y,
              width: cardWidth,
              height: cardHeight,
              scale: 1,
              borderRadius: 10,
            }}
            animate={{
              x,
              y,
              width: cardWidth,
              height: cardHeight,
              scale: 1,
              borderRadius: 10,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1] as const,
              delay: 0.02 * index + 0.4,
            }}
          >
            <motion.div
              className="absolute left-0 text-white pl-4 z-[40]"
              initial={{ x: x + 400, y: y + cardHeight - 100, opacity: 0 }}
              animate={{ x: 0, y: cardHeight - 100, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0.0, 0.2, 1] as const,
                delay: 0.02 * index + 0.5,
              }}
            >
              <div className="w-[30px] h-[5px] bg-white rounded-full mb-1.5" />
              <div className="text-[13px] font-medium mb-1">
                {cardData.place}
              </div>
              <div className="text-[20px] font-semibold font-['Oswald']">
                {cardData.title}
              </div>
              <div className="text-[20px] font-semibold font-['Oswald']">
                {cardData.title2}
              </div>
            </motion.div>
          </motion.button>
        );
      })}

      {/* Pagination */}
      <motion.div
        className="absolute z-[60] flex items-center"
        style={{ top: offsetTop + 330, left: offsetLeft }}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.6,
        }}
      >
        {/* Left arrow */}
        <div className="w-[50px] h-[50px] rounded-full border-2 border-white/30 flex items-center justify-center z-[60]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 stroke-2 text-white/60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        {/* Right arrow */}
        <div className="w-[50px] h-[50px] rounded-full border-2 border-white/30 flex items-center justify-center z-[60] ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 stroke-2 text-white/60"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        {/* Progress bar */}
        <div className="ml-6 z-[60] w-[500px] h-[50px] flex items-center">
          <div className="w-[500px] h-[3px] bg-white/20">
            <motion.div
              className="h-[3px] bg-[#ecad29]"
              initial={{ width: 0 }}
              animate={{ width: `${500 * (1 / data.length) * (active + 1)}px` }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            />
          </div>
        </div>

        {/* Slide numbers */}
        <div className="w-[50px] h-[50px] overflow-hidden z-[60] relative">
          {data.map((_, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-[50px] h-[50px] text-white flex items-center justify-center text-[32px] font-bold"
              initial={{ x: (index + 1) * numberSize }}
              animate={{ x: index === active ? 0 : (index + 1) * numberSize }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              {index + 1}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
