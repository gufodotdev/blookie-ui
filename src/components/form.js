module.exports = {
  ".form-input, .form-select, .form-multiselect, .form-textarea": {
    "@apply block bg-surface text-surface-foreground placeholder:text-surface-foreground/50 text-sm w-full rounded-md border-border focus:border-primary focus:ring-primary shadow-sm dark:[&::-webkit-calendar-picker-indicator]:invert-[50%]":
      {},
  },

  ".form-input": {
    "@apply [.form-input:where(&:not(.form-input-sm,.form-input-base,.form-input-lg))]:form-input-base":
      {},
  },

  ".form-input-sm": {
    "@apply h-9": {},
  },

  ".form-input-base": {
    "@apply h-10": {},
  },

  ".form-input-lg": {
    "@apply h-11": {},
  },

  ".form-select": {
    "@apply [.form-select:where(&:not(.form-select-sm,.form-select-base,.form-select-lg))]:form-select-base":
      {},
  },

  ".form-select-sm": {
    "@apply h-9": {},
  },

  ".form-select-base": {
    "@apply h-10": {},
  },

  ".form-select-lg": {
    "@apply h-11": {},
  },

  ".form-multiselect": {
    "@apply [.form-multiselect:where(&:not(.form-multiselect-sm,.form-multiselect-base,.form-multiselect-lg))]:form-multiselect-base":
      {},
  },

  ".form-multiselect-sm": {
    "@apply h-9": {},
  },

  ".form-multiselect-base": {
    "@apply h-10": {},
  },

  ".form-multiselect-lg": {
    "@apply h-11": {},
  },

  ".form-textarea": {
    "@apply [.form-textarea:where(&:not(.form-textarea-sm,.form-textarea-base,.form-textarea-lg))]:form-textarea-base":
      {},
  },

  ".form-textarea-sm": {
    "@apply min-h-9": {},
  },

  ".form-textarea-base": {
    "@apply min-h-10": {},
  },

  ".form-textarea-lg": {
    "@apply min-h-11": {},
  },

  ".form-radio, .form-checkbox": {
    "@apply border-border bg-muted text-primary focus:ring-primary": {},
  },

  ".form-radio": {
    "@apply [.form-radio:where(&:not(.form-radio-sm,.form-radio-base,.form-radio-lg))]:form-radio-base":
      {},
  },

  ".form-radio-sm": {
    "@apply size-3.5": {},
  },

  ".form-radio-base": {
    "@apply size-4": {},
  },

  ".form-radio-lg": {
    "@apply size-5": {},
  },

  ".form-checkbox": {
    "@apply rounded": {},
    "@apply [.form-checkbox:where(&:not(.form-checkbox-sm,.form-checkbox-base,.form-checkbox-lg))]:form-checkbox-base":
      {},
  },

  ".form-checkbox-sm": {
    "@apply size-3.5": {},
  },

  ".form-checkbox-base": {
    "@apply size-4": {},
  },

  ".form-checkbox-lg": {
    "@apply size-5": {},
  },
};
