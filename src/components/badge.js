module.exports = {
  ".badge": {
    "@apply inline-flex items-center gap-1.5 rounded-full px-2 h-6 text-xs font-medium [&_svg]:size-3.5":
      {},
    "@apply [.badge:where(&:not(.badge-default,.badge-primary,.badge-success,.badge-info,.badge-warning,.badge-danger))]:badge-default":
      {},
  },

  ".badge-default": {
    "@apply bg-muted text-muted-foreground": {},
  },

  ".badge-primary": {
    "@apply bg-primary/10 text-primary-shade": {},
  },

  ".badge-success": {
    "@apply bg-success/10 text-success-shade": {},
  },

  ".badge-info": {
    "@apply bg-info/10 text-info-shade": {},
  },

  ".badge-warning": {
    "@apply bg-warning/10 text-warning-shade": {},
  },

  ".badge-danger": {
    "@apply bg-danger/10 text-danger-shade": {},
  },
};
