module.exports = {
  ".link": {
    "@apply inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 cursor-pointer hover:opacity-85":
      {},
    "@apply [.link:where(&:not(.link-default,.link-primary))]:link-default": {},
    "@apply [.link:where(&:not(.link-sm,.link-base,.link-lg))]:link-base": {},
  },

  ".link-default": {
    "@apply text-foreground": {},
  },

  ".link-primary": {
    "@apply text-primary-shade": {},
  },

  ".link-sm": {
    "@apply text-xs": {},
  },

  ".link-base": {
    "@apply text-sm": {},
  },

  ".link-lg": {
    "@apply text-base": {},
  },
};
