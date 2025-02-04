module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        white: "hsla(var(--color-white))",
        black: "hsla(var(--color-black))",
        gray: {
          50: "hsla(var(--color-gray-50))",
          100: "hsla(var(--color-gray-100))",
          200: "hsla(var(--color-gray-200))",
          300: "hsla(var(--color-gray-300))",
          400: "hsla(var(--color-gray-400))",
          500: "hsla(var(--color-gray-500))",
          600: "hsla(var(--color-gray-600))",
          700: "hsla(var(--color-gray-700))",
          800: "hsla(var(--color-gray-800))",
          900: "hsla(var(--color-gray-900))",
          950: "hsla(var(--color-gray-950))",
        },
        background: "hsla(var(--color-background))",
        foreground: {
          DEFAULT: "hsla(var(--color-foreground))",
          muted: "hsla(var(--color-foreground-muted))",
        },
        border: "hsla(var(--color-border))",
        muted: {
          DEFAULT: "hsla(var(--color-muted))",
          shade: "hsla(var(--color-muted-shade))",
          foreground: "hsla(var(--color-muted-foreground))",
        },
        surface: {
          DEFAULT: "hsla(var(--color-surface))",
          shade: "hsla(var(--color-surface-shade))",
          foreground: "hsla(var(--color-surface-foreground))",
        },
        primary: {
          DEFAULT: "hsla(var(--color-primary))",
          shade: "hsla(var(--color-primary-shade))",
          foreground: "hsla(var(--color-primary-foreground))",
        },
        info: {
          DEFAULT: "hsla(var(--color-info))",
          shade: "hsla(var(--color-info-shade))",
          foreground: "hsla(var(--color-info-foreground))",
        },
        success: {
          DEFAULT: "hsla(var(--color-success))",
          shade: "hsla(var(--color-success-shade))",
          foreground: "hsla(var(--color-success-foreground))",
        },
        warning: {
          DEFAULT: "hsla(var(--color-warning))",
          shade: "hsla(var(--color-warning-shade))",
          foreground: "hsla(var(--color-warning-foreground))",
        },
        danger: {
          DEFAULT: "hsla(var(--color-danger))",
          shade: "hsla(var(--color-danger-shade))",
          foreground: "hsla(var(--color-danger-foreground))",
        },
      },
      keyframes: {
        "drawer-content-open-right": {
          from: {
            translate: "100% 0%",
          },
          to: {
            translate: "0% 0%",
          },
        },
        "drawer-content-close-right": {
          from: {
            translate: "0% 0%",
          },
          to: {
            translate: "100% 0%",
          },
        },
        "drawer-content-open-left": {
          from: {
            translate: "-100% 0%",
          },
          to: {
            translate: "0% 0%",
          },
        },
        "drawer-content-close-left": {
          from: {
            translate: "0% 0%",
          },
          to: {
            translate: "-100% 0%",
          },
        },
        "drawer-content-open-top": {
          from: {
            translate: "0% -100%",
          },
          to: {
            translate: "0% 0%",
          },
        },
        "drawer-content-close-top": {
          from: {
            translate: "0% 0%",
          },
          to: {
            translate: "0% -100%",
          },
        },
        "drawer-content-open-bottom": {
          from: {
            translate: "0% 100%",
          },
          to: {
            translate: "0% 0%",
          },
        },
        "drawer-content-close-bottom": {
          from: {
            translate: "0% 0%",
          },
          to: {
            translate: "0% 100%",
          },
        },
        "dialog-content-open": {
          from: {
            scale: "0.9",
            translate: "-5% -5%",
            opacity: "0",
          },
          to: {
            scale: "1",
            translate: "0% 0%",
            opacity: "1",
          },
        },
        "dialog-content-close": {
          from: {
            scale: "1",
            translate: "0% 0%",
            opacity: "1",
          },
          to: {
            scale: "0.9",
            translate: "-5% -5%",
            opacity: "0",
          },
        },
        "popover-content-open": {
          from: {
            scale: "0.95",
            opacity: "0",
          },
          to: {
            scale: "1",
            opacity: "1",
          },
        },
        "popover-content-close": {
          from: {
            scale: "1",
            opacity: "1",
          },
          to: {
            scale: "0.95",
            opacity: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "fade-out": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
      },
      animation: {
        "dialog-overlay-open": "fade-in 150ms",
        "dialog-overlay-close": "fade-out 75ms",
        "dialog-content-open": "dialog-content-open 150ms",
        "dialog-content-close": "dialog-content-close 75ms",
        "popover-content-open": "popover-content-open 75ms",
        "popover-content-close": "popover-content-close 75ms",
        "drawer-overlay-open": "fade-in 300ms",
        "drawer-overlay-close": "fade-out 150ms",
        "drawer-content-open-right": "drawer-content-open-right 300ms",
        "drawer-content-close-right": "drawer-content-close-right 150ms",
        "drawer-content-open-left": "drawer-content-open-left 300ms",
        "drawer-content-close-left": "drawer-content-close-left 150ms",
        "drawer-content-open-top": "drawer-content-open-top 300ms",
        "drawer-content-close-top": "drawer-content-close-top 150ms",
        "drawer-content-open-bottom": "drawer-content-open-bottom 300ms",
        "drawer-content-close-bottom": "drawer-content-close-bottom 150ms",
      },
    },
  },
};
