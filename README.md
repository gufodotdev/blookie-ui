# Blookie UI

**Blookie** is a Tailwind CSS plugin that provides a collection of pre-designed components to help you build React applications faster. It's lightweight, purely CSS, and it integrates seasmlessly with Radix UI Primitives, enabling you to create beautiful and fully accessible user interfaces with minimal effort.

## Installation

**1. Install npm package**

```bash
npm install -D blookie-ui
```

**2. Update Tailwind Config**

Add Blookie-ui to your tailwind.config.js file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require("blookie-ui"), // Add the Blookie-ui plugin
  ],
};
```

**3. Include fonts**

Blookie-ui uses Inter as the default font. Add it to the \<head\> section of your HTML:

```html
<html>
  <head>
    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link
      href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900"
      rel="stylesheet"
    />
  </head>
</html>
```

**4. Customize Fonts (optional)**

To use a custom font, extend fontFamily in your tailwind.config.js:

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Replace with your font
      },
    },
  },
  plugins: [require("blookie-ui")],
};
```

## List of Components

- [Button](https://blookie.io/docs/components/button)
- [Card](https://blookie.io/docs/components/card)
- [Container](https://blookie.io/docs/components/container)
- [Dialog](https://blookie.io/docs/components/dialog)
- [Dropdown](https://blookie.io/docs/components/dropdown)
- [Form](https://blookie.io/docs/components/form)
- [Link](https://blookie.io/docs/components/link)
- [Offcanvas](https://blookie.io/docs/components/offcanvas)
- [Pagination](https://blookie.io/docs/components/pagination)
- [Table](https://blookie.io/docs/components/table)
- [Tabs](https://blookie.io/docs/components/tabs)

more coming soon...

## Documentation

For full documentation, visit [blookie.io](https://blookie.io)

## Can you use Blookie without React?

Blookie was originally designed as a style layer for [Radix UI primitives](https://www.radix-ui.com/primitives), making it an excellent choice for React projects. Radix handles functionality and accessibility, while Blookie provides the styling to create a polished and professional UI.

That said, since Blookie is just CSS, it’s not tied exclusively to React or Radix. You can use it with other frameworks that have a compatible Radix port, such as Vue, Angular, or Svelte. It can even be used without a framework, purely as a CSS layer for your project.

In addition to its Radix-focused components (like dialogs, accordions, and dropdowns), Blookie also offers many static, non-interactive components such as cards, containers, and buttons that are not tied to Radix. This makes it versatile enough to fit a wide range of use cases, whether or not you’re using React and Radix.
