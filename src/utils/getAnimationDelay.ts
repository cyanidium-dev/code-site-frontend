/**
 * Обчислює delay для анімації залежно від стану splash screen
 * @param isLoadingSplashScreen - чи зараз програється splash screen
 * @param defaultDelay - звичайний delay для анімації
 * @param splashDelay - додатковий delay під час splash screen (за замовчуванням 3 секунди)
 * @returns delay для анімації
 */
export function getAnimationDelay(
  isLoadingSplashScreen: boolean,
  defaultDelay: number,
  splashDelay: number = 3
): number {
  return isLoadingSplashScreen ? splashDelay + defaultDelay : defaultDelay;
}

