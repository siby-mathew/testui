import { useGetNumberAccounts } from "@/hooks/useGetNumberAccounts";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";

import { keyframes } from "@emotion/react";
import { NumberCardProfile } from "@/components/NumberCardProfile/NumberCardProfile";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Profile: React.FC = () => {
  const { data, refetch, loading } = useGetNumberAccounts();

  return (
    <Container maxW={{ xl: "4/5" }} mt={20}>
      <Flex justifyContent={"space-between"}>
        <Heading>My Numbers</Heading>
        <IconButton
          onClick={() => refetch()}
          size={"sm"}
          _hover={{
            bg: "black",
          }}
        >
          <Icon
            animation={loading ? `${spin} 1s linear infinite` : ""}
            color={"white"}
            as={AiOutlineReload}
          />
        </IconButton>
      </Flex>
      <Box mt={5}>
        {data && (
          <Grid
            templateColumns={{
              base: `repeat(1,1fr)`,
              md: `repeat(4,1fr)`,
            }}
            gap={5}
          >
            {data &&
              data.phoneNumbers &&
              data.phoneNumbers.phoneNumbers &&
              data.phoneNumbers.phoneNumbers.map((number) => {
                return (
                  <NumberCardProfile key={number.account_pubkey} {...number} />
                );
              })}
          </Grid>
        )}

        {loading && !data && (
          <Flex minH={"30vh"} alignItems={"center"} justifyContent={"center"}>
            <Spinner />
          </Flex>
        )}

        {!loading && !data && (
          <Flex minH={"30vh"} alignItems={"center"} justifyContent={"center"}>
            <Flex opacity={0.5} fontSize={16}>
              No data available
            </Flex>
          </Flex>
        )}
      </Box>
    </Container>
  );
};
