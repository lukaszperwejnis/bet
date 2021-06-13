export const breakpoints = {
  mobile: 'screen and (max-width: 44.9375rem)',
  mobileUp: 'screen and (min-width: 44.9375rem)',
  mobileLandscape:
    'screen and (max-width: 44.9375rem) and (min-aspect-ratio: 121/80)', // < 720 and landscape,
  tabletUp: 'screen and (min-width: 45rem)', // > 720
  tabletOnly: 'screen and (min-width: 45rem) and (max-width: 74.9375rem)', // > 720 < 1199
  desktopDown: 'screen and (max-width: 75rem)', // > 1200
  desktopUp: 'screen and (min-width: 75rem)', // > 1200
};
