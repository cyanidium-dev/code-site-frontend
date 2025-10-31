"use client";
import { useState, useEffect, ReactNode } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { fadeInAnimation } from "@/utils/animationVariants";
import ArrowInCircleIcon from "../icons/ArrowInCircleIcon";

interface PaginationProps<T> {
  items: T[];
  renderItems: (items: T[]) => ReactNode;
  scrollTargetId: string;
  useItemsPerPage: () => number;
  maxVisiblePages?: number;
  className?: string;
}

export default function Pagination<T>({
  items,
  renderItems,
  scrollTargetId,
  useItemsPerPage,
  maxVisiblePages = 4,
  className = "",
}: PaginationProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(page);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });

    const targetElement = document.getElementById(scrollTargetId);
    if (targetElement) {
      const yOffset = -120; // Зміщення на 120px вгору
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: yPosition,
      });
    }
  };

  return (
    <>
      <div key={currentPage} className={`${className}`}>
        {renderItems(currentItems)}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30 })}
        className={`${totalPages > 1 ? "flex" : "hidden"}  justify-center items-center gap-3 xl:gap-[35px] mt-10 xl:mt-12 mx-auto`}
      >
        <button
          aria-label="left"
          className={`enabled:cursor-pointer flex justify-center items-center p-[10.5px] xl:p-[15px] size-[52px] xl:size-[66px] rounded-full 
          shadow-social transition duration-300 ease-in-out border-[1.5px]
          enabled:hover:brightness-125 enabled:active:scale-95 enabled:focus-visible:brightness-125
          ${page === 1 ? "bg-black text-white border-transparent" : "bg-main text-white border-main"}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={page === 1}
        >
          <ArrowInCircleIcon className="size-[28px] xl:size-[33px] rotate-180" />
        </button>

        <div>
          {pageNumbers.map((page) => (
            <button
              key={page}
              aria-label={page.toString()}
              className={`enabled:cursor-pointer px-1.5 py-2 text-[20px] font-medium leading-[120%] transition duration-300 ease-in-out
            ${page === currentPage ? "text-main-light" : " xl:hover:text-main-light"}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          aria-label="right"
          className={`enabled:cursor-pointer flex justify-center items-center p-[0px] xl:p-[15px] size-[52px] xl:size-[66px] rounded-full
             transition duration-300 ease-in-out border-[1.5px]
           shadow-social enabled:hover:brightness-125 enabled:active:scale-95 enabled:focus-visible:brightness-125
          ${
            currentPage === totalPages
              ? "text-white bg-black border-transparent"
              : "bg-main text-white border-main"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={page === totalPages}
        >
          <ArrowInCircleIcon className="size-[28px] xl:size-[33px]" />
        </button>
      </motion.div>
    </>
  );
}
