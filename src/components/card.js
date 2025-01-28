module.exports = {
  ".card": {
    "@apply relative w-full rounded-xl overflow-hidden": {},
    "@apply [.card:where(&:not(.card-default,.card-muted,.card-primary,.card-success,.card-info,.card-warning,.card-danger))]:card-default":
      {},
  },

  ".card-section": {
    "@apply [.card-section:where(&:not(.card-section-sm,.card-section-base,.card-section-lg))]:card-section-base":
      {},
  },

  ".card-default": {
    "@apply bg-surface border shadow-sm": {},
  },

  ".card-muted": {
    "@apply bg-muted text-foreground": {},
  },

  ".card-primary": {
    "@apply bg-primary text-primary-foreground": {},
  },

  ".card-success": {
    "@apply bg-success text-success-foreground": {},
  },

  ".card-info": {
    "@apply bg-info text-info-foreground": {},
  },

  ".card-warning": {
    "@apply bg-warning text-warning-foreground": {},
  },

  ".card-danger": {
    "@apply bg-danger text-danger-foreground": {},
  },

  ".card-section-sm": {
    "@apply p-3": {},
  },

  ".card-section-base": {
    "@apply p-6": {},
  },

  ".card-section-lg": {
    "@apply p-12": {},
  },
};
