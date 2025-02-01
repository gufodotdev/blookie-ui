module.exports = {
  ".dialog-overlay": {
    "@apply fixed inset-0 z-50 bg-black/50": {},
    "@apply data-[state=open]:animate-dialog-overlay-open data-[state=closed]:animate-dialog-overlay-close":
      {},
  },

  ".dialog-content": {
    "@apply fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-surface border shadow-sm rounded-xl p-6":
      {},
    "@apply data-[state=open]:animate-dialog-content-open data-[state=closed]:animate-dialog-content-close":
      {},
  },
};
