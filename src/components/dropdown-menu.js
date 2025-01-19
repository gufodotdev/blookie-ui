module.exports = {
  ".dropdown-menu": {
    "&-content": {
      "@apply z-50 min-w-48 overflow-hidden rounded-md border bg-surface p-1 text-surface-foreground shadow-md":
        {},
    },

    "&-item": {
      "@apply relative flex cursor-default items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-muted transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0":
        {},
    },

    "&-separator": {
      "@apply -mx-1 my-1 h-px bg-border": {},
    },

    "&-checkbox-item, &-radio-item": {
      "@apply relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-muted focus:text-surface-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50":
        {},
    },

    "&-item-indicator": {
      "@apply absolute left-2 size-3.5 flex items-center justify-center": {},
    },
  },
};
