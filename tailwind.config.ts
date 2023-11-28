import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        "fnba-green": {
          "50": "#ebfef4",
          "100": "#cefde4",
          "200": "#a1f9ce",
          "300": "#64f1b5",
          "400": "#27e098",
          "500": "#02c780",
          "600": "#00a269",
          "700": "#008257",
          "800": "#006646",
          "900": "#005c41",
          "950": "#003023",
        },
      },
    },
  },
};
