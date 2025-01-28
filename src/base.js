module.exports = {
  ":root": {
    "--color-white": "0, 0%, 100%",
    "--color-black": "0, 0%, 0%",

    "--color-gray-50": "0, 0%, 98%",
    "--color-gray-100": "240, 5%, 96%",
    "--color-gray-200": "240, 6%, 90%",
    "--color-gray-300": "240, 5%, 84%",
    "--color-gray-400": "240, 5%, 65%",
    "--color-gray-500": "240, 4%, 46%",
    "--color-gray-600": "240, 5%, 34%",
    "--color-gray-700": "240, 5%, 26%",
    "--color-gray-800": "240, 4%, 16%",
    "--color-gray-900": "240, 6%, 10%",
    "--color-gray-950": "240, 10%, 4%",

    "--color-background": "var(--color-gray-50)",
    "--color-foreground": "var(--color-gray-900)",

    "--color-border": "var(--color-gray-900), 0.1",

    "--color-surface": "var(--color-white)",
    "--color-surface-shade": "var(--color-gray-100)",
    "--color-surface-foreground": "var(--color-gray-900)",

    "--color-muted": "var(--color-gray-100)",
    "--color-muted-shade": "var(--color-gray-200)",
    "--color-muted-foreground": "var(--color-gray-500)",

    "--color-primary": "145, 100%, 32%",
    "--color-primary-shade": "145, 100%, 24%",
    "--color-primary-foreground": "var(--color-white)",

    "--color-info": "221, 83%, 53%",
    "--color-info-shade": "224, 76%, 48%",
    "--color-info-foreground": "var(--color-white)",

    "--color-success": "142, 76%, 36%",
    "--color-success-shade": "142, 72%, 29%",
    "--color-success-foreground": "var(--color-white)",

    "--color-warning": "45, 93%, 47%",
    "--color-warning-shade": "32, 95%, 44%",
    "--color-warning-foreground": "var(--color-white)",

    "--color-danger": "0, 72%, 51%",
    "--color-danger-shade": "0, 74%, 42%",
    "--color-danger-foreground": "var(--color-white)",
  },
  ".dark": {
    "--color-background": "var(--color-gray-900)",
    "--color-foreground": "0, 0%, 100%",

    "--color-border": "0, 0%, 100%, 0.1",

    "--color-surface": "var(--color-gray-800)",
    "--color-surface-shade": "var(--color-gray-700)",
    "--color-surface-foreground": "var(--color-white)",

    "--color-muted": "var(--color-white), 0.1",
    "--color-muted-shade": "var(--color-white), 0.2",
    "--color-muted-foreground": "var(--color-gray-400)",

    "--color-primary": "145, 100%, 32%",
    "--color-primary-shade": "145, 100%, 40%",
    "--color-primary-foreground": "var(--color-white)",

    "--color-info": "221, 83%, 53%",
    "--color-info-shade": "224, 76%, 48%",
    "--color-info-foreground": "var(--color-white)",

    "--color-success": "142, 76%, 36%",
    "--color-success-shade": "142, 72%, 29%",
    "--color-success-foreground": "var(--color-white)",

    "--color-warning": "45, 93%, 47%",
    "--color-warning-shade": "32, 95%, 44%",
    "--color-warning-foreground": "var(--color-white)",

    "--color-danger": "0, 72%, 51%",
    "--color-danger-shade": "0, 74%, 42%",
    "--color-danger-foreground": "var(--color-white)",
  },
  "*": {
    "@apply border-border": {},
  },
  body: {
    "@apply bg-background font-sans text-foreground antialiased": {},
  },
};
