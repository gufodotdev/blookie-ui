module.exports = {
  "[type='text'], input:where(:not([type])), [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select":
    {
      "@apply block bg-surface text-surface-foreground placeholder:text-surface-foreground/50 text-sm w-full rounded-md border-border focus:border-primary/20 focus:ring focus:ring-primary/10 focus:ring-opacity-50 h-10 dark:[&::-webkit-calendar-picker-indicator]:invert-[50%]":
        {},
    },

  textarea: {
    "@apply h-auto min-h-10": {},
  },

  option: {
    "@apply bg-surface text-surface-foreground dark:bg-gray-700": {},
  },

  "[type='checkbox'], [type='radio']": {
    "@apply rounded-md border-border text-primary focus:border-primary/20 focus:ring focus:ring-offset-0 focus:ring-primary/10 focus:ring-opacity-50 size-5 bg-muted":
      {},
  },

  "[type='radio']": {
    "@apply rounded-full !bg-[size:150%_150%]": {},
  },

  label: {
    "@apply inline-block text-foreground text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70":
      {},
  },

  ".input-sm": {
    "@apply h-9": {},
  },

  ".input-lg": {
    "@apply h-11": {},
  },
};
