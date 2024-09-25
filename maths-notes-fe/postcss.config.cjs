module.exports = {
  plugins: {
    "postcss-simple-vars": {}, // Enables the use of simple CSS variables
    "postcss-preset-mantine": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    }, // Mantine-specific preset for styles
  },
};
