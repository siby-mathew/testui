import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "medium",
    borderRadius: "md",
  },

  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.muted",
        },
      },

      outline: {
        border: "1px solid",
        borderColor: "colorPalette.border",
        _hover: {
          bg: "colorPalette.subtle",
        },
      },
    },

    size: {
      sm: {
        h: "8",
        px: "3",
        textStyle: "sm",
      },
      md: {
        h: "10",
        px: "4",
        textStyle: "md",
      },
      lg: {
        h: "12",
        px: "6",
        textStyle: "lg",
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
