module.exports = {
  content: [".src/**/*.{html,ts}",],
  theme: {
    extend: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'orange-100': '#fffaf0',
      'orange-200': '#feebc8',
      'orange-300': '#fbd38d',
      'orange-400': '#f6ad55',
      'orange-500': '#ed8936',
      'orange-600': '#dd6b20',
      'orange-700': '#c05621',
      'orange-800': '#9c4221',
      'orange-900': '#7b341e'
    }),
  },
    
  },
  plugins: [],
}