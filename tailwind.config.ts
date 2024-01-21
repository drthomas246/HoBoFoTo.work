import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ofelia: ["ofelia-display", "sans-serif"],
      microgramma: ["microgramma-extended", "sans-serif"],
      ab: ["ab-circle", "sans-serif"],
      maruGo: ["a-otf-ud-shin-maru-go-pr6n", "sans-serif"],
      yuseiMagic: ["yusei-magic", "sans-serif"],
    },
    extend: {
      skew: {
        "18": "18deg",
      },
      spacing: {
        "2/5": "40%",
        "0.6": "3px",
      },
      transformOrigin: {
        "top-left-1-0": "100% 0",
        "top-left-0-1": "0 100%",
      },
      animation: {
        down: "circleMoveDown 1.6s ease-in-out infinite,circleMoveHide 1.6s ease-out infinite",
        upDown: "circleMoveUpDown 3.2s ease-in-out infinite,circleMoveHide 1.6s ease-out infinite",
        up: "circleMoveUp 1.6s ease-in-out infinite,circleMoveHide 1.6s ease-out infinite"
      },
      textUnderlineOffset: {
        6: "6px",
      }
    },
  },
  plugins: [],
}
export default config
