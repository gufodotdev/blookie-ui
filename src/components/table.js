module.exports = {
  ".table": {
    "@apply relative w-full overflow-auto text-sm": {},
  },

  ".table-header": {
    "@apply border-b [&_tr]:border-b": {},
  },

  ".table-body": {
    "@apply [&_tr:last-child]:border-0": {},
  },

  ".table.table-striped": {
    "@apply [&_tr:nth-child(even)]:bg-muted": {},
  },

  ".table-footer": {
    "@apply border-t bg-muted/50 font-medium [&>tr]:last:border-b-0": {},
  },

  ".table-row": {
    "@apply border-b": {},
  },

  ".table-head": {
    "@apply h-12 px-4 text-left align-middle font-medium text-muted-foreground":
      {},
  },

  ".table-cell": {
    "@apply p-4 align-middle": {},
  },
};
