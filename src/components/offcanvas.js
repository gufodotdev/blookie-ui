module.exports = {
  ".offcanvas-overlay": {
    "@apply fixed inset-0 z-50 bg-black/50": {},
  },

  ".offcanvas-content": {
    "@apply fixed z-50 card card-section rounded-none": {},
    "@apply [.offcanvas-content:where(&:not(.offcanvas-content-left,.offcanvas-content-right,.offcanvas-content-bottom,.offcanvas-content-top))]:offcanvas-content-right":
      {},
  },

  ".offcanvas-content-left": {
    "@apply inset-y-0 left-0 w-full h-full max-w-[min(90%,_16rem)]": {},
  },

  ".offcanvas-content-right": {
    "@apply inset-y-0 right-0 w-full h-full max-w-[min(90%,_16rem)]": {},
  },

  ".offcanvas-content-bottom": {
    "@apply inset-x-0 w-full h-auto bottom-0 max-h-[90%]": {},
  },

  ".offcanvas-content-top": {
    "@apply inset-x-0 w-full h-auto top-0 max-h-[90%]": {},
  },
};
