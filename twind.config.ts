import { Options } from "$fresh/plugins/twind.ts";
import { apply } from 'twind';

export default {
  selfURL: import.meta.url,
  preflight: {
    "@font-face": [
      {
        fontFamily: "'Humane'",
        fontWeight: "100 700",
        src: [
          "url('./Humane-VF.woff2') format('woff2')",
        ]
      },
      {
        fontFamily: "'Open Sauce Sans'",
        fontWeight: "400",
        src: [
          "url('./OpenSauceSans-Regular.woff2') format('woff2')",
        ]
      }
    ],
    p: apply`py-4`,
    body: apply`font-body dark:bg-black text-black font-normal dark:text-white`,
  },
  theme: {
    fontFamily: {
      display: "'Humane'",
      body: "'Open Sauce Sans', 'Arial Black', sans-serif",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
    }
  },

} as Options;
