module.exports = {
  ".page-section": {
    "@apply relative isolate": {},
    "@apply [.page-section:where(&:not(.page-section-sm,.page-section-base,.page-section-lg))]:page-section-base":
      {},
  },

  ".page-section-sm": {
    "@apply py-12": {},
  },

  ".page-section-base": {
    "@apply py-24": {},
  },

  ".page-section-lg": {
    "@apply py-48": {},
  },
};
