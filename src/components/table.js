module.exports = {
  ".table": {
    "@apply min-w-full text-sm": {},
  },

  ".table-head": {},

  ".table-body": {
    "@apply [&_tr:last-child]:border-0": {},
  },

  ".table-footer": {},

  ".table-row": {
    "@apply border-b": {},
  },

  ".table-header": {
    "@apply h-12 px-4 text-left align-middle font-medium text-muted-foreground":
      {},
  },

  ".table-data": {
    "@apply p-4 align-middle": {},
  },

  ".table.table-striped": {
    "@apply [&_tr:nth-child(even)]:bg-muted": {},
  },
};
