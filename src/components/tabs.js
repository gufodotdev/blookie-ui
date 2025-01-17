module.exports = {
  ".tabs": {
    "&-list": {
      "@apply bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1":
        {},
    },

    "&-trigger": {
      "@apply data-[state=active]:bg-surface data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm":
        {},
    },

    "&-content": {
      "@apply mt-2": {},
    },
  },
};
