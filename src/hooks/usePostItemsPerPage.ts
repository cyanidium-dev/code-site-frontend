"use client";
import { useState, useLayoutEffect } from "react";

export const usePostsItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useLayoutEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return itemsPerPage;
};
