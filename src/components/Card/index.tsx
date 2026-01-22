import { Box, chakra, Flex } from "@chakra-ui/react";
import { Button } from "@/components/Button";

export const Card: React.FC<{
  number: string;
  countryCode?: string;
  isClaimed?: boolean;
}> = ({ number, isClaimed = !1, countryCode = "+SOL" }) => {
  return (
    <Flex
      direction={"column"}
      w="full"
      bgGradient={`
    radial-gradient(
      120% 120% at 50% 0%,
      rgba(170, 255, 120, 0.35) 0%,
      rgba(120, 220, 90, 0.25) 30%,
      rgba(40, 80, 40, 0.6) 55%,
      rgba(10, 18, 10, 0.95) 100%
    )
  `}
      border="1px solid"
      borderColor="#294b21"
      borderRadius="xl"
      boxShadow="0 0 40px rgba(120, 255, 120, 0.15)"
      p={4}
      transition={"all ease .2s"}
      _hover={{
        boxShadow: "0 0 40px rgba(120, 255, 120, 0.25)",
      }}
    >
      <Flex>
        <Box
          bg="brand.primary"
          boxSize={30}
          borderRadius={"full"}
          opacity={0.3}
        ></Box>
      </Flex>
      <Flex fontSize={18} mt={5} fontWeight={"bold"}>
        <chakra.span color={"brand.primary"} mr={2}>
          {countryCode}
        </chakra.span>
        {number}
      </Flex>
      <Flex fontSize={14}>SOL</Flex>
      {!isClaimed && (
        <Flex mt={5}>
          <Button borderRadius={"full"} w="full" size={"xs"}>
            Claim Now
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
