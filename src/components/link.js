module.exports = {
  // base
  ".link": {
    "@apply inline-flex text-foreground items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 cursor-pointer hover:opacity-85":
      {},

    // variant
    "&-primary": {
      "@apply text-primary-shade": {},
    },

    // size
    "&-sm": {
      "@apply text-xs": {},
    },

    "&-lg": {
      "@apply text-base": {},
    },
  },
};
