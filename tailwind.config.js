module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fff8f1',
        nude: '#f3e5da',
        sand: '#e4d3c3',
        beige: '#f7efe5',
        brown: '#7a5d45',
        gold: '#c4a86d',
        ink: '#1b1b1b'
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};
