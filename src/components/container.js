module.exports = {
  ".container": {
    "@apply w-full px-4 sm:px-6 lg:px-8": {},
    "@apply [.container:where(&:not(.container-base,.container-fluid))]:container-base":
      {},
  },

  ".container-base": {
    "@apply mx-auto max-w-7xl": {},
  },

  ".container-fluid": {},
};
