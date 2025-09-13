module.exports = {
  plugins: {
    // Tailwind v4 moved the PostCSS plugin to a separate package
    // See migration notes: install `@tailwindcss/postcss` and use it here
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
