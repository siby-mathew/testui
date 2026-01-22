import React from "react";
import { Box, Flex, HStack, Link as ChakraLink, Image } from "@chakra-ui/react";

import { useWallet } from "@solana/wallet-adapter-react";

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button";

import { UserProfile } from "../UserProfile";
import { ButtonHandler } from "../ButtonHandler";

export const Header: React.FC = () => {
  const { connected } = useWallet();

  return (
    <Box as="header" w="100%">
      <Flex
        maxW={{ xl: "4/5" }}
        position={"relative"}
        mx="auto"
        h="64px"
        px={4}
        my={2}
        align="center"
        justify="space-between"
        w="full"
      >
        <HStack gap={8} w="full">
          <ChakraLink
            color={"brand.primary"}
            as={Link}
            fontSize="xl"
            fontWeight="bold"
            href="/"
            outline={"none !important"}
            transition={"all ease .2s"}
            _hover={{
              opacity: 0.7,
            }}
          >
            <Image src="/logo.svg" maxH={"34px"} />
          </ChakraLink>

          <HStack
            gap={6}
            display={{ base: "none", md: "flex" }}
            fontWeight="medium"
            alignItems={"center"}
            justifyContent={"center"}
            flex={"auto"}
          >
            {/* {MENU_OPTIONS.map(({ name, path }) => {
              return (
                <ChakraLink
                  color={"#fff"}
                  href={`/#${path}`}
                  transition={"all ease .2s"}
                  textDecoration={"none"}
                  _hover={{ color: "brand.primary" }}
                  as={Link}
                  key={name}
                >
                  {name}
                </ChakraLink>
              );
            })} */}
          </HStack>
          <Flex>{connected && <UserProfile />}</Flex>
          {!connected && (
            <Button
              variant={"solid"}
              as={"div"}
              position={"relative"}
              overflow={"hidden"}
            >
              Connect Wallet
              <ButtonHandler />
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
