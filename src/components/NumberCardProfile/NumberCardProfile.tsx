import { chakra, Flex } from "@chakra-ui/react";

import type { GetPhoneNumbersQuery } from "@/gql/graphql";
import { formatTimeDiff } from "@/utils/time";

type NumberCardProfileProps =
  GetPhoneNumbersQuery["phoneNumbers"]["phoneNumbers"][0];
export const NumberCardProfile: React.FC<NumberCardProfileProps> = ({
  number,
  country_code,
  phone_account,
  created_at,
}) => {
  return (
    <Flex
      direction={"column"}
      w="full"
      backdropFilter={"blur(15px)"}
      bgGradient={`
    radial-gradient(
      120% 120% at 50% 0%,
      rgba(170, 255, 120, 0.35) 0%,
      rgba(120, 220, 90, 0.25) 30%,
      rgba(40, 80, 40, 0.6) 55%,
      rgba(10, 18, 10, 0.95) 100%
    )
  `}
      border="none"
      borderRadius="xl"
      boxShadow="0 0 40px rgba(120, 255, 120, 0.15)"
      p={4}
      transition={"all ease .2s"}
      _hover={{
        boxShadow: "0 0 40px rgba(120, 255, 120, 0.25)",
      }}
    >
      <Flex fontSize={18} mt={5} fontWeight={"bold"}>
        <chakra.span color={"brand.primary"} mr={2}>
          {country_code}
        </chakra.span>
        {number}
      </Flex>
      <Flex fontSize={14} opacity={0.5}>
        Linked : {phone_account === "UNLINKED" ? "No" : "Yes"}
      </Flex>

      <Flex mt={5} fontSize={13} color={"#8db380"}>
        Created {formatTimeDiff(created_at)}{" "}
      </Flex>
    </Flex>
  );
};
