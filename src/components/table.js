module.exports = {
  ".table": {
    "@apply relative w-full overflow-auto text-sm": {},

    "&-header": {
      "@apply border-b [&_tr]:border-b": {},
    },

    "&-body": {
      "@apply [&_tr:last-child]:border-0": {},
    },

    "&.table-striped": {
      "@apply [&_tr:nth-child(even)]:bg-muted": {},
    },

    "&-footer": {
      "@apply border-t bg-muted/50 font-medium [&>tr]:last:border-b-0": {},
    },

    "&-row": {
      "@apply border-b": {},
    },

    "&-head": {
      "@apply h-12 px-4 text-left align-middle font-medium text-muted-foreground":
        {},
    },

    "&-cell": {
      "@apply p-4 align-middle": {},
    },
  },
};
