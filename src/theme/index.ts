import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./buttonRecipe";

export const AppTheme = createSystem(
  defaultConfig,

  defineConfig({
    cssVarsPrefix: "sm",
    theme: {
      recipes: {
        button: buttonRecipe,
      },
      slotRecipes: {},
      breakpoints: {
        base: "100px",
        sm: "410px",
        md: "768px",
        lg: "960px",
        xl: "1400px",
      },
      tokens: {
        fonts: {
          body: { value: `"Inter", sans-serif` },
          heading: { value: `"Funnel Display", sans-serif` },
        },
        colors: {
          brand: {
            primary: { value: "#addc5f" },
            secondary: { value: "#84af3b" },
            /**MAIL.FUN */
            "green.100": { value: `rgba(30, 250, 155, 1)` },
            "green.101": { value: `rgb(19 205 125)` },
            "green.110": { value: "rgba(217, 217, 217, 0.1)" },
            "green.120": { value: "rgba(30, 250, 111, 0.2)" },
            "green.200": { value: `rgba(31, 245, 109, 0.1)` },
            "purple.100": { value: "rgba(121, 91, 255, 1)" },
            "purple.200": { value: "rgba(152, 70, 255, 1)" },
            "purple.300": { value: "rgba(172, 106, 255, 1)" },
            "purple.400": { value: "rgba(173, 168, 195, 1)" },
            "purple.500": { value: "#0d0b17" },
            "grey.100": { value: "rgba(139, 145, 158, 1)" },
            "grey.200": { value: "rgba(117, 113, 133, 1)" },
            "grey.300": { value: "rgba(37, 33, 52, 1)" },
            "grey.400": { value: "rgba(17, 17, 17, 1)" },
            "grey.500": { value: "rgba(135, 135, 135, 1)" },
            black: { value: "rgba(23, 23, 23, 1)" },
            "red.100": { value: "rgba(255, 32, 32, 1)" },
            "red.110": { value: "rgba(255, 0, 45, 0.15)" },
            "red.120": { value: "rgba(255, 32, 32, 0.2)" },
            "yellow.100": { value: "rgba(255, 225, 32, 1)" },
            "yellow.120": { value: "rgba(255, 225, 32, 0.2)" },
            "blue.100": { value: "rgba(63, 184, 249, 1)" },
            "blue.120": { value: "rgba(63, 184, 249, 0.2)" },
            "blue.500": { value: "rgba(0, 18, 80, 0.6)" },
          },
          gradient: {
            s1: {
              value:
                "linear-gradient( 234.11deg, #1efa9b 11.5%, #5c8ed8 47%, #9846ff 92% );",
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          danger: { value: "{colors.red}" },
        },
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
    globalCss: {
      "html, body": {
        background: "#00080F",
        fontFamily: `"PT Sans", sans-serif`,
        margin: 0,
        padding: 0,
        color: "#ffffffff",
        lineHeight: "normal",
        fontSize: "15px",
      },
      h2: {
        lineHeight: 1.2,
      },
    },
  }),
);
