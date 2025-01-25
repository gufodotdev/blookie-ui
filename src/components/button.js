module.exports = {
  ".btn": {
    "@apply inline-flex text-foreground items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 cursor-pointer":
      {},
    "@apply [.btn:where(&:not(.btn-default,.btn-muted,.btn-primary,.btn-success,.btn-info,.btn-warning,.btn-danger,.btn-outline,.btn-ghost))]:btn-default":
      {},
    "@apply [.btn:where(&:not(.btn-xs,.btn-sm,.btn-base,.btn-lg))]:btn-base":
      {},
  },

  ".btn-default": {
    "@apply bg-surface text-surface-foreground shadow-sm hover:bg-surface-shade border dark:bg-muted dark:hover:bg-muted-shade":
      {},
  },

  ".btn-muted": {
    "@apply bg-muted text-foreground shadow-sm hover:bg-muted-shade": {},
  },

  ".btn-primary": {
    "@apply bg-primary text-primary-foreground shadow-sm hover:bg-primary-shade":
      {},
  },

  ".btn-success": {
    "@apply bg-success text-success-foreground shadow-sm hover:bg-success-shade":
      {},
  },

  ".btn-info": {
    "@apply bg-info text-info-foreground shadow-sm hover:bg-info-shade": {},
  },

  ".btn-warning": {
    "@apply bg-warning text-warning-foreground shadow-sm hover:bg-warning-shade":
      {},
  },

  ".btn-danger": {
    "@apply bg-danger text-danger-foreground shadow-sm hover:bg-danger-shade":
      {},
  },

  ".btn-outline": {
    "@apply border hover:bg-muted": {},
  },

  ".btn-ghost": {
    "@apply hover:bg-muted": {},
  },

  ".btn-xs": {
    "@apply h-8 px-2.5 text-xs [&_svg]:size-3.5": {},
  },

  ".btn-sm": {
    "@apply h-9 px-3": {},
  },

  ".btn-base": {
    "@apply h-10 px-4": {},
  },

  ".btn-lg": {
    "@apply h-11 px-8": {},
  },

  ".btn-icon": {
    "@apply w-10 px-0": {},
  },

  ".btn.btn-icon.btn-xs": {
    "@apply w-8": {},
  },

  ".btn.btn-icon.btn-sm": {
    "@apply w-9": {},
  },

  ".btn.btn-icon.btn-lg": {
    "@apply w-11": {},
  },
};
