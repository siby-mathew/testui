import { Button } from "@/components/Button";
import { ButtonHandler } from "@/components/ButtonHandler";
import { RecentSearches } from "@/components/RecentSearches";
import { SearchInput } from "@/components/Search";
import { useClaimNumber } from "@/hooks/useClaimNumber";
// import { useDummy } from "@/hooks/useDummy";
import { useCheckNumberAvailability } from "@/hooks/useNumberAvailability";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useParams } from "@tanstack/react-router";

export const Register: React.FC = () => {
  const { number } = useParams({ from: `/register/$number` });
  const { mutateAsync, isPending } = useClaimNumber();
  const {
    data: isAvailable,
    isLoading,
    isFetching,
    isFetched,
  } = useCheckNumberAvailability(number);

  const showSpinner = !isFetched || isLoading || isFetching;
  const isFetchedInitial = isFetched && typeof isAvailable !== "undefined";
  const { connected } = useWallet();
  return (
    <Container maxW={{ xl: "4/5" }} mt={"150px"}>
      <Box mt={20}>
        <SearchInput maxW="full" />
      </Box>

      <Box my={50}>
        <Box fontSize={"2xl"}>You searched for '{number}'</Box>
        <Box py={5}>
          <Flex
            fontWeight={"normal"}
            fontSize={"md"}
            color={
              !isFetchedInitial ? "" : !isAvailable ? "red.500" : "green.500"
            }
          >
            {isFetchedInitial &&
              `${!isAvailable ? "No" : "Yes"}, ${number} is ${!isAvailable ? "not" : ""} available`}
            {showSpinner && <Spinner ml={5} />}
          </Flex>
        </Box>
        <Flex
          w={"full"}
          direction={"row"}
          gap={4}
          flexWrap={{ base: "wrap", md: "initial" }}
        >
          <Flex
            flex={1}
            direction={"column"}
            borderRadius={12}
            bg={"whiteAlpha.100"}
            padding={{
              base: 4,
              md: 6,
            }}
          >
            <Heading color={"white"}>Claim this number</Heading>
            <Flex direction={"row"} justifyContent={"space-between"}>
              <List.Root color={"white"} px={5} mt={8} gap={2}>
                <List.Item>Join the 48h open auction</List.Item>
                <List.Item>Highest bid wins after 48h</List.Item>
              </List.Root>
              <Flex mt={6} alignItems={"center"}>
                {connected && (
                  <Button
                    w={"100%"}
                    className="animated-sm"
                    bg={"brand.green.100"}
                    color={"black"}
                    _hover={{ bg: "brand.green.101", color: "white" }}
                    borderRadius={8}
                    py={5}
                    px={14}
                    onClick={() => mutateAsync(number)}
                    disabled={!isAvailable}
                  >
                    {!isPending && <Text>Claim Now</Text>}
                    {isPending && <Spinner />}
                  </Button>
                )}
                {!connected && (
                  <Button
                    w={"100%"}
                    className="animated-sm"
                    bg={"brand.green.100"}
                    color={"black"}
                    _hover={{ bg: "brand.green.101", color: "white" }}
                    borderRadius={8}
                    py={5}
                    px={14}
                    position={"relative"}
                  >
                    Connect Wallet
                    <ButtonHandler />
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <RecentSearches />
      </Box>
    </Container>
  );
};
