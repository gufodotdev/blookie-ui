# Blookie UI

**Blookie** is a Tailwind CSS plugin that provides a collection of ready-to-use components to help you build React applications faster. It's lightweight, purely CSS, and it integrates seamlessly with Radix UI Primitives, enabling you to build beautiful and fully accessible user interfaces with minimal effort.

## Documentation

For full documentation, visit [blookie.io](https://blookie.io)

## List of Components

- [Button](https://blookie.io/docs/components/button)
- [Card](https://blookie.io/docs/components/card)
- [Container](https://blookie.io/docs/components/container)
- [Dialog](https://blookie.io/docs/components/dialog)
- [Drawer](https://blookie.io/docs/components/drawer)
- [Dropdown](https://blookie.io/docs/components/dropdown)
- [Form](https://blookie.io/docs/components/form)
- [Link](https://blookie.io/docs/components/link)
- [Pagination](https://blookie.io/docs/components/pagination)
- [Table](https://blookie.io/docs/components/table)
- [Tabs](https://blookie.io/docs/components/tabs)

more coming soon...

## Installation

**1. Install npm package**

Add Blookie-ui as a development dependency:

```bash
npm install -D blookie-ui
```

**2. Update Tailwind Config**

Include Blookie-ui in your tailwind.config.js file:

```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require("blookie-ui"), // Add the Blookie-ui plugin
  ],
};
```

**3. Include Fonts**

Blookie-ui uses Inter as the default font. Add it to the \<head\> section of your HTML. For details about changing the default font, see the [customization guide](https://blookie.io/docs/getting-started/customization).

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

**4. That's it!**

You can now start using Blookie in your projects.
