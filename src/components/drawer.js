module.exports = {
  ".drawer-overlay": {
    "@apply fixed inset-0 z-50 bg-black/50": {},
    "@apply data-[state=open]:animate-drawer-overlay-open data-[state=closed]:animate-drawer-overlay-close":
      {},
  },
  ".drawer-content": {
    "@apply fixed z-50 p-6 shadow-sm bg-surface": {},
    "@apply [.drawer-content:where(&:not(.drawer-content-left,.drawer-content-right,.drawer-content-bottom,.drawer-content-top))]:drawer-content-right":
      {},
  },
  ".drawer-content-left": {
    "@apply inset-y-0 left-0 w-full h-full max-w-[min(90%,_16rem)]": {},
    "@apply data-[state=open]:animate-drawer-content-open-left data-[state=closed]:animate-drawer-content-close-left":
      {},
  },

  ".drawer-content-right": {
    "@apply inset-y-0 right-0 w-full h-full max-w-[min(90%,_16rem)]": {},
    "@apply data-[state=open]:animate-drawer-content-open-right data-[state=closed]:animate-drawer-content-close-right":
      {},
  },

  ".drawer-content-bottom": {
    "@apply inset-x-0 w-full h-auto bottom-0 max-h-[90%]": {},
    "@apply data-[state=open]:animate-drawer-content-open-bottom data-[state=closed]:animate-drawer-content-close-bottom":
      {},
  },

  ".drawer-content-top": {
    "@apply inset-x-0 w-full h-auto top-0 max-h-[90%]": {},
    "@apply data-[state=open]:animate-drawer-content-open-top data-[state=closed]:animate-drawer-content-close-top":
      {},
  },
};
