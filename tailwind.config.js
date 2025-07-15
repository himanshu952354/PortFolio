// tailwind.config.js
const patterns = require('tailwindcss-bg-patterns');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    patterns({
      // enable only the patterns you want
      variants: ['responsive'], // allows using patterns with responsive classes
      patterns: ['circular-lines', 'graph-paper', 'topography'], // load selected patterns
    }),
  ],
};
