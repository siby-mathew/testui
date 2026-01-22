import { Button as ChakraButton, type ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton
      bg="brand.primary"
      _hover={{
        bg: "brand.secondary",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
