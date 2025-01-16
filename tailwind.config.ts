import type { Config } from 'tailwindcss'
//@ts-ignore
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
 //...
  theme: {
    extend: {
      animation: {
        moveUp: 'moveUp 1.4s ease forwards',
        appear: 'appear 1s 1s forwards'
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' }
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      }
    }
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme, addUtilities }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }
  ]
}
export default config
