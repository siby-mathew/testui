import {
  Container,
  Flex,
  Image,
  Link,
  Separator,
  Text,
} from "@chakra-ui/react";
import packageJSON from "@/../package.json";
import { Link as TanstackLink } from "@tanstack/react-router";
export const PageFooter = () => {
  return (
    <Flex
      w={"100%"}
      borderColor={"#1f290e"}
      bg="#11170d"
      py={16}
      as={"footer"}
      position={"relative"}
      zIndex={2}
    >
      <Container>
        <Flex
          w={"100%"}
          justifyContent={"space-between"}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            flex={1}
            maxWidth={{ base: "100%", lg: "5/12" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Flex w={"100%"}>
              <Link
                href="/"
                as={TanstackLink}
                outline={"none !important"}
                transition={"all ease .2s"}
                _hover={{
                  opacity: 0.8,
                }}
              >
                <Image
                  src="/logo.svg"
                  maxHeight={{ base: "30px", lg: "30px" }}
                />
              </Link>
            </Flex>
          </Flex>
          <Flex
            maxWidth={{ base: "100%", lg: "6/12" }}
            mt={{ base: 28, lg: 0 }}
            flex={1}
          >
            <Flex
              w={"100%"}
              direction={"column"}
              justifyContent={{ base: "start", lg: "end" }}
            >
              <Flex
                direction="row"
                py={8}
                gap={6}
                justifyContent={{ base: "center", lg: "end" }}
                fontSize={14}
              >
                <Link color={"white"} target="_blank" href={""}>
                  X
                </Link>
                <Link color={"white"} target="_blank" href={""}>
                  Telegram
                </Link>
                <Link color={"white"} target="_blank" href={""}>
                  Instagram
                </Link>
              </Flex>
              <Separator w={"100%"} borderColor={"rgba(58, 58, 58, 1)"} />
              <Flex
                direction={{ base: "column", lg: "row" }}
                mt={{ base: 6, lg: 10 }}
                alignItems={"center"}
                color={"brand.grey.500"}
                w={"100%"}
                gap={{ base: 4, lg: 6 }}
                justifyContent={{ base: "center", lg: "end" }}
                fontSize={14}
              >
                <Text>Solphne © 2025 </Text>
                <Text color={"whiteAlpha.700"}> V {packageJSON.version}</Text>
                <Link target="_blank" href={""} color={"brand.grey.500"}>
                  Docs
                </Link>
                <Link target="_blank" href={""} color={"brand.grey.500"}>
                  Terms & Conditions{" "}
                </Link>
                <Link target="_blank" href={"/"} color={"brand.grey.500"}>
                  Privacy Policy
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
