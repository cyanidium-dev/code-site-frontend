"use client";
import { useEffect, useRef } from "react";
import Map from "./Map";

export default function AnimatedMapWithDots() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Знаходимо всі path елементи з fill="#154C9E" (точки на карті)
    const svg = mapRef.current.querySelector("svg");
    if (!svg) return;

    // Додаємо SVG фільтр для ефекту свічіння
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const filter = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "filter"
    );
    filter.setAttribute("id", "glow-effect");
    filter.setAttribute("x", "-50%");
    filter.setAttribute("y", "-50%");
    filter.setAttribute("width", "200%");
    filter.setAttribute("height", "200%");

    // Blur для свічіння (збільшено для більшого ефекту)
    const feGaussianBlur = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feGaussianBlur"
    );
    feGaussianBlur.setAttribute("stdDeviation", "3.5");
    feGaussianBlur.setAttribute("result", "coloredBlur");

    // Об'єднуємо оригінал і blur
    const feMerge = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feMerge"
    );
    const feMergeNode1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feMergeNode"
    );
    feMergeNode1.setAttribute("in", "coloredBlur");
    const feMergeNode2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feMergeNode"
    );
    feMergeNode2.setAttribute("in", "SourceGraphic");

    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);
    filter.appendChild(feGaussianBlur);
    filter.appendChild(feMerge);
    defs.appendChild(filter);
    svg.insertBefore(defs, svg.firstChild);

    const allDots = Array.from(
      svg.querySelectorAll('path[fill="#154C9E"]')
    ) as SVGPathElement[];

    // Фільтруємо точки - тільки центральні частини материків (на основі viewBox 604x328)
    const filteredDots = allDots.filter((dot) => {
      const bbox = dot.getBBox();
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;

      // Більш жорсткий фільтр - margin ~25% (тільки центральні точки материків)
      const marginX = 604 * 0.25;
      const marginY = 328 * 0.25;

      return (
        centerX > marginX &&
        centerX < 604 - marginX &&
        centerY > marginY &&
        centerY < 328 - marginY
      );
    });

    const animateSingleDot = (dot: SVGPathElement) => {
      // Швидка зміна кольору на білий з ефектом свічіння (збільшено)
      dot.style.transition = "fill 0.5s ease-in-out, filter 0.5s ease-in-out";
      dot.setAttribute("fill", "#FFFFFF");
      dot.style.filter =
        "url(#glow-effect) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))";

      // Повертаємо колір назад через 3.5 секунди (довше світиться)
      setTimeout(() => {
        dot.style.transition = "fill 0.5s ease-in-out, filter 0.5s ease-in-out";
        dot.setAttribute("fill", "#154C9E");
        dot.style.filter = "none";
      }, 3500);
    };

    const animateDots = () => {
      // Вибираємо 4-5 випадкових точок
      const numberOfDots = Math.floor(Math.random() * 2) + 4; // 4 або 5
      const selectedDots: SVGPathElement[] = [];

      // Мінімальна відстань між точками для рівномірного розподілу
      let minDistance = 100; // Зменшено для гарантії 4-5 точок
      const maxAttempts = 150;

      // Вибираємо першу точку випадково
      selectedDots.push(
        filteredDots[Math.floor(Math.random() * filteredDots.length)]
      );

      // Вибираємо наступні точки з перевіркою відстані
      let attempts = 0;
      while (selectedDots.length < numberOfDots && attempts < maxAttempts) {
        const candidateDot =
          filteredDots[Math.floor(Math.random() * filteredDots.length)];

        // Перевіряємо, чи не вибрана вже ця точка
        if (selectedDots.includes(candidateDot)) {
          attempts++;
          continue;
        }

        // Перевіряємо відстань до всіх вже вибраних точок
        let isFarEnough = true;
        for (const selectedDot of selectedDots) {
          const bbox1 = candidateDot.getBBox();
          const bbox2 = selectedDot.getBBox();
          const x1 = bbox1.x + bbox1.width / 2;
          const y1 = bbox1.y + bbox1.height / 2;
          const x2 = bbox2.x + bbox2.width / 2;
          const y2 = bbox2.y + bbox2.height / 2;
          const distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
          );

          if (distance < minDistance) {
            isFarEnough = false;
            break;
          }
        }

        if (isFarEnough) {
          selectedDots.push(candidateDot);
          attempts = 0; // Скидаємо після успіху
        } else {
          attempts++;
        }
      }

      // Fallback: якщо не набралось достатньо точок, зменшуємо відстань
      if (selectedDots.length < numberOfDots) {
        minDistance = 60;
        attempts = 0;

        while (selectedDots.length < numberOfDots && attempts < maxAttempts) {
          const candidateDot =
            filteredDots[Math.floor(Math.random() * filteredDots.length)];

          if (selectedDots.includes(candidateDot)) {
            attempts++;
            continue;
          }

          let isFarEnough = true;
          for (const selectedDot of selectedDots) {
            const bbox1 = candidateDot.getBBox();
            const bbox2 = selectedDot.getBBox();
            const x1 = bbox1.x + bbox1.width / 2;
            const y1 = bbox1.y + bbox1.height / 2;
            const x2 = bbox2.x + bbox2.width / 2;
            const y2 = bbox2.y + bbox2.height / 2;
            const distance = Math.sqrt(
              Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
            );

            if (distance < minDistance) {
              isFarEnough = false;
              break;
            }
          }

          if (isFarEnough) {
            selectedDots.push(candidateDot);
          }
          attempts++;
        }
      }

      // Анімуємо кожну точку з випадковою затримкою
      selectedDots.forEach((dot, i) => {
        const delay = i * (400 + Math.random() * 300); // 400-700ms між точками
        setTimeout(() => {
          animateSingleDot(dot);
        }, delay);
      });
    };

    // Запускаємо анімацію кожні 4.5 секунди
    const interval = setInterval(animateDots, 4500);

    // Перша анімація одразу
    setTimeout(animateDots, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={mapRef} className="w-fit h-fit">
      <Map />
    </div>
  );
}
