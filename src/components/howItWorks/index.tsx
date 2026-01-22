import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const HowitWorks = () => {
  return (
    <Container py={15} maxW={{ xl: "4/5" }}>
      <Flex w={"full"} direction={"column"}>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "5xl", lg: "6xl" }}
          fontWeight={400}
          textShadow={"0 0 14px var(--sm-colors-brand-primary)"}
        >
          How it Works
        </Heading>
        <Flex w={"full"} mt={20} direction={{base:'column' , lg:'row'}}>
          <Flex flex={"1"} direction={"column"} justifyContent={'space-between'} gap={4} alignItems={'center'}>
            <Flex direction={"column"} >
              <Heading color={'brand.primary'}>1 Connect & Search</Heading>
              <Text mt={4}>
                Connect & Search to anect your phone number to your utlilure
                beczallieh.
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Heading color={'brand.primary'}>2. Mint Your SIM NFT</Heading>
              <Text mt={4}>
                Connect & Search to anect your phone number to your utlilure
                beczallieh.
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Heading color={'brand.primary'}>Setup Profile & Earn</Heading>
              <Text mt={4}>
                Connect & Search to anect your phone number to your utlilure
                beczallieh.
              </Text>
            </Flex>
          </Flex>
          <Flex flex={"1"} userSelect={'none'} display={{base:'none', lg:'flex'}}>
                <Image src={"/img/l1.png"} userSelect={'none'} maxHeight={'500px'} />
          </Flex>
          <Flex flex={"1"} userSelect={'none'} display={{base:'none', lg:'flex'}}>
                <Image src={"/img/as1.png"}  userSelect={'none'} maxHeight={'500px'} />
          </Flex>
          <Flex flex={"2"} display={{base:'none', lg:'flex'}}>
            <Image src={"/img/as2.png"} userSelect={'none'} maxHeight={'500px'}/>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
