module.exports = {
  ".card": {
    "@apply relative w-full bg-surface border rounded-xl overflow-hidden shadow-sm":
      {},
  },

  ".card-section": {
    "@apply [.card-section:where(&:not(.card-section-sm,.card-section-base,.card-section-lg))]:card-section-base":
      {},
  },

  ".card-section-sm": {
    "@apply p-4": {},
  },

  ".card-section-base": {
    "@apply p-6": {},
  },

  ".card-section-lg": {
    "@apply p-12": {},
  },
};
