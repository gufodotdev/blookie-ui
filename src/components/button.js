module.exports = {
  // base
  ".btn": {
    "@apply inline-flex text-foreground items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 cursor-pointer h-10 px-4":
      {},

    // variant
    "&-default": {
      "@apply bg-surface text-surface-foreground hover:bg-surface-shade border dark:bg-muted dark:hover:bg-muted-shade":
        {},
    },
    "&-muted": {
      "@apply bg-muted text-foreground hover:bg-muted-shade": {},
    },
    "&-primary": {
      "@apply bg-primary text-primary-foreground hover:bg-primary-shade": {},
    },
    "&-success": {
      "@apply bg-success text-success-foreground hover:bg-success-shade": {},
    },
    "&-info": {
      "@apply bg-info text-info-foreground hover:bg-info-shade": {},
    },
    "&-warning": {
      "@apply bg-warning text-warning-foreground hover:bg-warning-shade": {},
    },
    "&-danger": {
      "@apply bg-danger text-danger-foreground hover:bg-danger-shade": {},
    },
    "&-outline": {
      "@apply border hover:bg-muted": {},
    },
    "&-ghost": {
      "@apply hover:bg-muted": {},
    },

    // size
    "&-sm": {
      "@apply h-9 px-3": {},
    },
    "&-lg": {
      "@apply h-11 px-8": {},
    },

    // icon
    "&-icon": {
      "@apply w-10 px-0": {},

      "&.btn-sm": {
        "@apply w-9": {},
      },
      "&.btn-lg": {
        "@apply w-11": {},
      },
    },
  },
};
