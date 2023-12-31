const mystTheme = require('@myst-theme/styles');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', ...mystTheme.content],
  theme: {
    extend: mystTheme.themeExtensions,
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: mystTheme.safeList,
};
