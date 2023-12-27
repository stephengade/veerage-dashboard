import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      red: "#FF0000",
      vrBlue: "#4545FE",
      vrBlack: "#191919",
      vrBlack700: "#606060",
      vrBlack500: "#CBCBCB",
      vrGrey: "#3D3D3D",
      vrLemon: "#12D8A0",
      vrRouge: "#FF6A6A",
      vrYellow: "#FF9103"
    }
  },
  plugins: [],
}
export default config
