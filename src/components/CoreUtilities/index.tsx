import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

type CardProps = {
  img?:string,
  title: string;
  description: string;
};
const DATA: Array<CardProps> = [
  {
    img:'/img/u1.png',
    title: "Dial-to-Pay Transactions",
    description: "Send crypto assets directly by dialing a SolNumber.",
  },
  {
     img:'/img/u2.png',
    title: "Trade Golden SIMs",
    description:
      "Marketplace to trade collectible numbers and high-value SIM NFTs.",
  },
  {
     img:'/img/u3.png',
    title: "Decentralized Caller ID",
    description:
      "Verified caller profiles with decentralized identity and reputation.",
  },
  {
     img:'/img/u4.png',
    title: "Call Rewards & XP",
    description:
      "Get rewards & XP for calls, interactions, and reaching Silver Tier.",
  },
];
const UtitilityCard: React.FC<CardProps> = ({ title, description ,img }) => {
  return (
    <Flex
      direction={"column"}
      border="solid 2px"
      p={15}
      borderRadius={15}
      borderColor={"#1f290e"}
      bg="#11170d"
    >
      <Flex justifyContent={'center'}>
        <Image src={img}  maxWidth={'260px'}/>
      </Flex>
      <Flex fontSize={"xl"} fontWeight={"bold"}>
        {title}
      </Flex>
      <Flex mt={2}>{description}</Flex>
    </Flex>
  );
};
export const CoreUtilities: React.FC = () => {
  return (
    <Container w="full" maxW={{ xl: "4/5" }}>
      <Heading
        textAlign={"center"}
        fontSize={{ base: "5xl", lg: "6xl" }}
        fontWeight={400}
        textShadow={"0 0 14px var(--sm-colors-brand-primary)"}
      >
        Core Utilities
      </Heading>
      <Box maxW={{ xl: "3/5" }} mx={"auto"} mt={20}>
        <Grid
          templateColumns={{
            base: `repeat(1,1fr)`,
            md: `repeat(2,1fr)`,
          }}
          gap={30}
        >
          {DATA.map((item,i) => {
            return (
              <GridItem key={i}>
                <UtitilityCard {...item} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
