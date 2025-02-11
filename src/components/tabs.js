module.exports = {
  ".tabs": {
    "@apply [.tabs:where(&:not(.tabs-boxed,.tabs-underlined))]:tabs-boxed": {},
  },

  ".tabs-list": {
    "@apply inline-flex": {},
  },

  ".tabs-trigger": {
    "@apply px-4 h-9 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50":
      {},
  },

  ".tabs-content": {
    "@apply mt-2 w-full": {},
  },

  ".tabs-boxed": {
    ".tabs-trigger": {
      "@apply rounded-md": {},
      "@apply data-[state=active]:bg-surface data-[state=active]:shadow-sm": {},
    },

    ".tabs-list": {
      "@apply bg-muted p-1 rounded-md": {},
    },
  },

  ".tabs-underlined": {
    ".tabs-trigger": {
      "@apply border-b-2": {},
      "@apply data-[state=active]:border-foreground": {},
    },
  },
};
